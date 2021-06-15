import {URL} from 'url';

import getPort from 'get-port';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import {
  loadExtension,
  getLegacyPostPurchaseData,
  convertLegacyPostPurchaseDataToQueryString,
  log,
  namedArgument,
} from './utilities';
import {createWebpackConfiguration} from './webpack-config';
import {openBrowser} from './browser';

const LEGACY_POST_PURCHASE_DATA_PATH = '/data';
const WEBSOCKET_PATH = '/build';

const PUBLIC_PATH = '/assets/';

export async function dev(...args: string[]) {
  const extension = loadExtension();

  const port = Number(
    namedArgument('port', args) ?? (await getPort({port: 8910})),
  );
  const url = `http://localhost:${port}`;
  const publicUrl = namedArgument('publicUrl', args);
  const tunnelStarted = Boolean(publicUrl);
  const filename = 'extension.js';
  const scriptUrl = new URL(`${PUBLIC_PATH}${filename}`, publicUrl || url);
  const isHttps = scriptUrl.protocol === 'https:';

  const compiler = webpack(
    createWebpackConfiguration({
      development: true,
      output: {
        filename,
        publicPath: PUBLIC_PATH,
      },
      hotOptions: {
        https: isHttps,
        webSocket: {
          host: scriptUrl.hostname,
          port: Number(scriptUrl.port) || (isHttps ? 443 : 80),
          path: WEBSOCKET_PATH,
        },
      },
    }),
  );

  const firstCompilePromise = new Promise<void>((resolve) => {
    let hasResolved = false;

    compiler.hooks.done.tap('CheckoutUIExtensions.Compiled', (stats) => {
      if (stats.hasErrors()) {
        log(`Build failed with errors: ${stats.toString('errors-only')}`, {
          error: true,
        });

        return;
      }

      if (hasResolved) {
        log(`Rebuilt your extension`);
      } else {
        hasResolved = true;
        resolve();
      }
    });
  });

  const server = new WebpackDevServer(compiler, {
    // webpack-dev-server injects a lot of things to the client
    // which are imcompatible with WebWorker environment.
    // It's also unnecessary because we have an alternative provided by
    // `@shopify/ui-extensions-webpack-hot-client/worker`
    injectClient: false,
    injectHot: false,

    // This makes local server public so that
    // it can be forwarded from ngrok
    host: '0.0.0.0',
    port,
    disableHostCheck: true,

    // `transportMode` switches to `ws` so that the worker file can use WebSocket
    // instead of default SocketJs in webpack-dev-server.
    // `sockPath` allows to override default path from webpack-dev-server.
    hot: false,
    hotOnly: false,
    liveReload: false,
    inline: false,
    transportMode: 'ws',
    sockPath: WEBSOCKET_PATH,

    publicPath: PUBLIC_PATH,

    before(app) {
      app.get('/', (req, res) => {
        const protocol = req.headers['x-forwarded-proto'] ?? req.protocol;
        const host = req.headers.host;
        const origin = `${protocol}://${host}`;

        res.set('Content-Type', 'text/html');
        res.set('Cache-Control', 'no-store');

        function renderIndexPage(content: string) {
          res.send(`
            <html>
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height, viewport-fit=cover">
                <style>
                  * {
                    box-sizing: border-box;
                  }

                  body {
                    min-height: 100vh;
                    min-height: -webkit-fill-available;
                    display: grid;
                    margin: 0;
                    align-content: center;
                    justify-content: center;

                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                      sans-serif;
                  }

                  html {
                    height: -webkit-fill-available;
                    background: black;
                    color: white;
                  }

                  .content {
                    max-width: 40rem;
                    padding: 2rem;
                    font-size: 1.5em;
                  }

                  code {
                    color: mediumseagreen;
                    word-break: keep-all;
                  }
                </style>
              </head>

              <body>
                <div class="content">
                  <p>
                    This page is served by your local UI Extension development server. Instead of
                    visiting this page directly, you will need to connect your local development
                    environment to a real checkout environment.
                  </p>
                  <p>${content}</p>
                </div>
              </body>
            </html>
          `);
        }

        if (protocol === 'https') {
          renderIndexPage(
            `Create a checkout and append <code>?dev=${origin}/query</code> to the URL to start developing your extension.`,
          );
        } else {
          renderIndexPage(`Make sure you have a secure URL for your local development server by running <code>shopify tunnel start --port=${port}</code>,
            create a checkout, and append <code>?dev=https://TUNNEL_URL/query</code> to the URL, where <code>TUNNEL_URL</code> is
            replaced with your own ngrok URL.`);
        }

        res.end();
      });

      // This endpoint is used by C1 to request information about the local workspace,
      // including what extensions are available locally, and how to connect to the
      // build server websocket for those extensions.
      app.get('/query', (req, res) => {
        const protocol = req.headers['x-forwarded-proto'] ?? req.protocol;
        const host = req.headers.host;
        const origin = `${protocol}://${host}`;

        res.set('Access-Control-Allow-Origin', '*');
        res.set('Cache-Control', 'no-cache');

        res.json({
          queryUrl: `${origin}${req.path}`,
          extensions: [
            {
              scriptUrl: `${origin}${PUBLIC_PATH}${filename}`,
              socketUrl: `${origin.replace(/^http/, 'ws')}${WEBSOCKET_PATH}`,
              extensionPoints:
                extension.type === 'checkout'
                  ? extension.config.extensionPoints
                  : ['Checkout::PostPurchase::Render'],
              metafields: extension.config?.metafields || [],
            },
          ],
        });
      });

      // This endpoint powers a browser extension that was built for the
      // post-purchase extension:
      // https://github.com/Shopify/post-purchase-devtools/blob/master/src/background/background.ts#L16-L35
      app.get(LEGACY_POST_PURCHASE_DATA_PATH, (_, res) => {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(getLegacyPostPurchaseData(scriptUrl.toString(), extension));
      });
    },

    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/',
        },
      ],
    },

    // Webpack has a horrible setup for disabling logs. There is a `noInfo`
    // option, which just sets the overall `logLevel` to `warn`, and so
    // continues to show things like webpack build output that we want to
    // hide. There’s a `quiet` option, but that is ignored on startup
    // so that the URL of the dev server is always printed (which again,
    // we do not want). This was the only approach I found that works —
    // pass `logLevel`, which is not actually typed as being available, but
    // is used when creating the logger :/
    ...({logLevel: 'error'} as any),
    clientLogLevel: 'silent',
    stats: process.env.DEBUG === undefined ? false : 'verbose',
  });

  log(`Starting dev server on port ${port}`);

  const httpListenPromise = new Promise<void>((resolve, reject) => {
    server.listen(port, '0.0.0.0', (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  log(`Your extension is available at ${scriptUrl}`);

  const isPostPurchaseExtension = extension.type === 'post-purchase';
  if (isPostPurchaseExtension) {
    log(
      `You can append this query string: ${convertLegacyPostPurchaseDataToQueryString(
        getLegacyPostPurchaseData(scriptUrl.toString(), extension),
      )}`,
    );
  } else if (tunnelStarted) {
    log(`Next, you’ll need to create a checkout on your development shop and`);
    log(
      `append this query string to the first page of checkout: \`?dev=${publicUrl}/query\``,
    );
  } else {
    log(`next, run \`shopify tunnel start --port=${port}\` in a new terminal.`);
    log(
      `you’ll then need to create a checkout on your development shop, and append this query string to the first page of checkout,`,
    );
    log(
      `replacing TUNNEL_URL with your own ngrok URL: \`?dev=https://TUNNEL_URL/query\``,
    );
  }

  const openUrl = getOpenUrl(args);

  if (openUrl) {
    const extensionPoint = namedArgument('extension-point', args);

    openUrl.searchParams.set('extension', JSON.stringify(scriptUrl));

    if (extensionPoint) {
      openUrl.searchParams.set('extension-point', extensionPoint);
    }

    const opened = openBrowser(openUrl.href);

    if (opened) {
      log(`Opening a preview of your extension at ${openUrl.href}`);
    } else {
      log(`You can see a preview of your extension at ${openUrl.href}`);
    }
  }
}

function getOpenUrl(args: string[]) {
  const openArg = namedArgument('open', args);
  return (openArg ?? '').startsWith('http') ? new URL(openArg!) : undefined;
}

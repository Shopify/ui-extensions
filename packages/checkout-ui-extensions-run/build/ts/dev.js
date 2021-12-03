"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dev = void 0;
const url_1 = require("url");
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
const utilities_1 = require("./utilities");
const browser_1 = require("./browser");
const LEGACY_POST_PURCHASE_DATA_PATH = '/data';
const WEBSOCKET_PATH = '/build';
const PUBLIC_PATH = '/assets/';
async function dev(...args) {
    const extension = utilities_1.loadExtension();
    const config = await utilities_1.parseDevelopmentServerConfig(args);
    const { extensionPoint, filename, port, scriptUrl, webpackConfiguration, } = config;
    const compiler = webpack_1.default(webpackConfiguration);
    const firstCompilePromise = new Promise((resolve) => {
        let hasResolved = false;
        compiler.hooks.done.tap('CheckoutUIExtensions.Compiled', (stats) => {
            if (stats.hasErrors()) {
                utilities_1.log(`Build failed with errors: ${stats.toString('errors-only')}`, {
                    error: true,
                });
                return;
            }
            if (hasResolved) {
                utilities_1.log(`Rebuilt your extension`);
            }
            else {
                hasResolved = true;
                resolve();
            }
        });
    });
    const server = new webpack_dev_server_1.default(compiler, Object.assign(Object.assign({ 
        // webpack-dev-server injects a lot of things to the client
        // which are imcompatible with WebWorker environment.
        // It's also unnecessary because we have an alternative provided by
        // `@shopify/ui-extensions-webpack-hot-client/worker`
        injectClient: false, injectHot: false, 
        // This makes local server public so that
        // it can be forwarded from ngrok
        host: '0.0.0.0', port, disableHostCheck: true, 
        // `transportMode` switches to `ws` so that the worker file can use WebSocket
        // instead of default SocketJs in webpack-dev-server.
        // `sockPath` allows to override default path from webpack-dev-server.
        hot: false, hotOnly: false, liveReload: false, inline: false, transportMode: 'ws', sockPath: WEBSOCKET_PATH, publicPath: PUBLIC_PATH, before(app) {
            app.get('/', (req, res) => {
                var _a;
                const protocol = (_a = req.headers['x-forwarded-proto']) !== null && _a !== void 0 ? _a : req.protocol;
                const host = req.headers.host;
                const origin = `${protocol}://${host}`;
                res.set('Content-Type', 'text/html');
                res.set('Cache-Control', 'no-store');
                function renderIndexPage(content) {
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
                    renderIndexPage(`Create a checkout and append <code>?dev=${origin}/query</code> to the URL to start developing your extension.`);
                }
                else {
                    renderIndexPage(`Make sure you have a secure URL for your local development server by running <code>shopify extension tunnel start --port=${port}</code>,
            create a checkout, and append <code>?dev=https://TUNNEL_URL/query</code> to the URL, where <code>TUNNEL_URL</code> is
            replaced with your own ngrok URL.`);
                }
                res.end();
            });
            // This endpoint is used by C1 to request information about the local workspace,
            // including what extensions are available locally, and how to connect to the
            // build server websocket for those extensions.
            app.get('/query', (req, res) => {
                var _a, _b;
                const protocol = (_a = req.headers['x-forwarded-proto']) !== null && _a !== void 0 ? _a : req.protocol;
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
                            extensionPoints: extension.type === 'checkout'
                                ? extension.config.extensionPoints
                                : ['Checkout::PostPurchase::Render'],
                            metafields: ((_b = extension.config) === null || _b === void 0 ? void 0 : _b.metafields) || [],
                        },
                    ],
                });
            });
            // This endpoint powers a browser extension that was built for the
            // post-purchase extension:
            // https://github.com/Shopify/post-purchase-devtools/blob/master/src/background/background.ts#L16-L35
            app.get(LEGACY_POST_PURCHASE_DATA_PATH, (_, res) => {
                res.set('Access-Control-Allow-Origin', '*');
                res.json(utilities_1.getLegacyPostPurchaseData(scriptUrl.toString(), extension));
            });
        }, historyApiFallback: {
            rewrites: [
                {
                    from: /./,
                    to: '/',
                },
            ],
        } }, { logLevel: 'error' }), { clientLogLevel: 'silent', stats: process.env.DEBUG === undefined ? false : 'verbose' }));
    utilities_1.log(`Starting dev server on port ${port}`);
    const httpListenPromise = new Promise((resolve, reject) => {
        server.listen(Number(port), '0.0.0.0', (error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve();
            }
        });
    });
    await Promise.all([firstCompilePromise, httpListenPromise]);
    printNextSteps({ log: utilities_1.log, config, extension });
    const openUrl = getOpenUrl(args);
    if (openUrl) {
        openUrl.searchParams.set('extension', JSON.stringify(scriptUrl));
        if (extensionPoint) {
            openUrl.searchParams.set('extension-point', extensionPoint);
        }
        const opened = browser_1.openBrowser(openUrl.href);
        if (opened) {
            utilities_1.log(`Opening a preview of your extension at ${openUrl.href}`);
        }
        else {
            utilities_1.log(`You can see a preview of your extension at ${openUrl.href}`);
        }
    }
}
exports.dev = dev;
function getOpenUrl(args) {
    const openArg = utilities_1.namedArgument('open', args);
    return (openArg !== null && openArg !== void 0 ? openArg : '').startsWith('http') ? new url_1.URL(openArg) : undefined;
}
function printNextSteps({ log, config: { passwordPageUrl, permalinkUrl, port, publicUrl, scriptUrl }, extension, }) {
    const isPostPurchaseExtension = extension.type === 'post-purchase';
    log(`Your extension is available at ${scriptUrl}`);
    if (isPostPurchaseExtension) {
        log(`You can append this query string: ${utilities_1.convertLegacyPostPurchaseDataToQueryString(utilities_1.getLegacyPostPurchaseData(scriptUrl.toString(), extension))}`);
    }
    else if (publicUrl) {
        if (permalinkUrl && passwordPageUrl) {
            log('');
            log(`If this is first time you are testing the extension, `);
            log(`please login to your development store first by visiting`);
            log(passwordPageUrl);
            log('');
            log(`To create a checkout and test your extension please visit the following URL:`);
            log(permalinkUrl);
        }
        else {
            log(`Next, you’ll need to create a checkout on your development shop and`);
            log(`append this query string to the first page of checkout: \`?dev=${publicUrl}/query\``);
        }
    }
    else {
        log(`next, run \`shopify extension tunnel start --port=${port}\` in a new terminal.`);
        log(`you’ll then need to create a checkout on your development shop, and append this query string to the first page of checkout,`);
        log(`replacing TUNNEL_URL with your own ngrok URL: \`?dev=https://TUNNEL_URL/query\``);
    }
}

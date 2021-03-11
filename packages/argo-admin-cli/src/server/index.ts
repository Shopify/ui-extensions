import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import cors from 'cors';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import getPort from 'get-port';
import webpackDevMiddlewareReporter from 'webpack-dev-middleware/lib/reporter';
import {merge} from 'lodash';

import {createWebpackConfiguration} from '../webpackConfig';
import {log} from '../utilities';

export interface ClientConfig {
  env?: string;
  entry: string;
  port: number;
  sockPath: string;
  output?: {
    publicPath?: string;
    filename?: string;
  };
}

export interface HostConfig {
  type: string;
  scriptUrl: string;
}

export type DevServerConfig = Pick<WebpackDevServer.Configuration, 'before'> & {
  port: number;
  sockPath: string;
};

export interface ServerConfig {
  apiKey?: string;
  uuid?: string;
  entry: string;
  env?: string;
  port: number;
  type: string;
  resourceUrl?: string;
  name?: string;
  shop?: string;
}

const alias = process.env.SHOPIFY_DEV
  ? {
      '@shopify/argo-admin': path.resolve(__dirname, '../../../argo-admin/src'),
      '@shopify/argo-admin-react': path.resolve(__dirname, '../../../argo-admin-react/src'),
      '@shopify/argo-admin-host': path.resolve(__dirname, '../../../argo-admin-host/src'),
    }
  : undefined;

export function createClientConfig(
  config: ClientConfig,
): ReturnType<typeof createWebpackConfiguration> {
  const {env, entry, port, sockPath} = config;
  const {publicPath, filename} = {
    publicPath: '/assets/',
    filename: 'extension.js',
    ...config.output,
  };

  const pathEnv = typeof env === 'string' ? path.resolve(env) : undefined;
  if (pathEnv === path.resolve('.env')) {
    throw new Error(
      'Cannot name environment file .env (in root folder) as this is in use in Shopify CLI',
    );
  }
  const dotEnvPlugin = pathEnv ? [new Dotenv({path: pathEnv})] : [];

  const webpackConfig = createWebpackConfiguration({
    mode: 'development',
    target: 'webworker',
    entry: [path.resolve(__dirname, './hot-client'), path.resolve(entry)],
    output: {
      globalObject: 'self',
      filename,
      publicPath,
    },
    devtool: 'source-map',
    plugins: [
      ...dotEnvPlugin,
      new webpack.DefinePlugin({
        __hotClientOptions__: JSON.stringify({
          webSocket: {
            host: 'localhost',
            port,
            path: sockPath,
          },
        }),
      }),
    ],
  });
  webpackConfig.resolve.alias = alias;

  return webpackConfig;
}

export function createHostConfig(
  config: HostConfig,
): ReturnType<typeof createWebpackConfiguration> {
  const {type, scriptUrl} = config;

  const serverWebpackConfig = createWebpackConfiguration({
    mode: 'development',
    target: 'web',
    entry: path.resolve(__dirname, './host/index'),
    output: {
      globalObject: 'self',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: `Argo Admin Simulator - ${type}`,
        template: path.resolve(__dirname, 'host/templates/index.ejs'),
        timestamp: Date.now(),
      }),
      new webpack.DefinePlugin({
        THIRD_PARTY_SCRIPT: JSON.stringify(scriptUrl),
        EXTENSION_POINT: JSON.stringify(type),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
      ],
    },
    externals: {
      react: 'React',
    },
  });
  serverWebpackConfig.resolve.alias = alias;

  return serverWebpackConfig;
}

export async function run(
  configs: ReturnType<typeof createWebpackConfiguration>[],
  devServerConfig: DevServerConfig,
  onReady?: () => void,
) {
  const {port, sockPath, before} = devServerConfig;

  let serverInitialized = false;
  const webpackCompiler = webpack(configs);
  webpackCompiler.hooks.done.tap('ArgoSimulator', () => {
    if (!serverInitialized) {
      onReady?.();
      serverInitialized = true;
    }
  });

  const server = new WebpackDevServer(webpackCompiler, {
    /**
     * webpack-dev-server injects a lot of things to the client
     * which are imcompatible with WebWorker environment.
     * It's also unnecessary because we have an alternative here
     * `packages/argo-admin-cli/src/server/hotClient.ts`
     */
    injectClient: false,

    /**
     * This makes local server public so that
     * it can be forwarded from ngrok
     */
    host: '0.0.0.0',
    port,
    disableHostCheck: true,

    /**
     * This enables hot reload but do not automatically refresh the page.
     * `transportMode` switches to `ws` so that the worker file can use WebSocket
     * instead of default SocketJs in webpack-dev-server.
     * `sockPath` allows to override default path from webpack-dev-server.
     */
    hot: true,
    hotOnly: true,
    liveReload: false,
    inline: true,
    transportMode: 'ws',
    sockPath,

    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/index.html',
        },
      ],
    },

    before,

    logLevel: 'silent',
    stats: process.env.DEBUG === undefined ? ('errors-only' as const) : ('verbose' as const),

    ...({reporter} as any),
  });
  server.listen(port, '0.0.0.0', (error) => {
    if (error) {
      log(error.message, {error: true});
      return;
    }
    log('Starting dev server...');
  });
}

export async function server(config: ServerConfig) {
  const {
    entry,
    env,
    apiKey = 'argo_app_key',
    uuid = '',
    name = 'Argo Extension',
    resourceUrl,
    type,
    shop = 'YOUR-TEST-SHOP.myshopify.com',
  } = config;
  const port = await getPort({port: config.port});
  const sockPath = 'stats';
  const publicPath = '/assets/';
  const filename = 'extension.js';
  const serverUrl = `http://localhost:${port}`;
  const scriptUrl = `${publicPath}${filename}`;

  const clientWebpackConfig = createClientConfig({
    entry,
    env,
    port,
    sockPath,
    output: {
      filename,
      publicPath,
    },
  });
  const hostWebpackConfig = createHostConfig({type, scriptUrl});

  run(
    [clientWebpackConfig, hostWebpackConfig],
    {
      port,
      sockPath,
      before(app) {
        app.use(bodyParser.json());
        app.use(cors());

        const manifest = {
          apiKey,
          uuid,
          name,
          resourceUrl,
          identifier: type,
          resources: ['products', 'productVariant'],
        };

        let manifestWithAdditionalMobileData = {};

        function withRoutes(req) {
          const protocol = req.headers['x-forwarded-proto'] || req.protocol;
          const host = req.headers.host;

          const origin = `${protocol}://${host}`;
          return {
            scriptUrl: `${origin}${publicPath}${filename}`,
            stats: `${origin}/${sockPath}`,
            mobile: `${origin}/mobile`,
          };
        }

        app.get('/data', function (req, res) {
          res.json({
            ...manifest,
            ...withRoutes(req),
          });
        });

        app.post('/mobile', function (req, res) {
          const {app, resourceUrl} = req.body;
          manifestWithAdditionalMobileData = merge({}, manifest, {app, resourceUrl});
          res.json({});
        });

        app.get('/mobile', function (req, res) {
          res.json({
            version: 1,
            payload: {
              ...manifestWithAdditionalMobileData,
              ...withRoutes(req),
            },
          });
        });
      },
    },
    () => {
      log(`Started dev server on ${serverUrl}`);
      log(`| What's next?`);
      log(`| Run shopify tunnel --port=${port}`);
      log(
        `| Open extension on your development store using https://${shop}/admin/extensions-dev?url=https://TUNNEL-URL/data`,
      );
    },
  );
}

/**
 * Workaround to output changes in console as this is not an official API
 * See https://github.com/webpack/webpack-dev-middleware/blob/v3.7.2/lib/reporter.js
 */
const reporter: typeof webpackDevMiddlewareReporter = (middlewareOptions, options) => {
  return webpackDevMiddlewareReporter(middlewareOptions, {
    ...options,
    log: console,
  });
};

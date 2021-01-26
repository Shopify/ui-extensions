import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import getPort from 'get-port';
import webpackDevMiddlewareReporter from 'webpack-dev-middleware/lib/reporter';

import {createWebpackConfiguration} from '../webpackConfig';

export interface ServerConfig {
  apiKey?: string;
  entry: string;
  env?: string;
  port: number;
  resourceId?: number;
  type: string;
  title?: string;
}

const alias = process.env.SHOPIFY_DEV
  ? {
      '@shopify/argo-admin': path.resolve(__dirname, '../../../argo-admin/src'),
      '@shopify/argo-admin-react': path.resolve(__dirname, '../../../argo-admin-react/src'),
      '@shopify/argo-admin-host': path.resolve(__dirname, '../../../argo-admin-host/src'),
    }
  : undefined;

export async function server(config: ServerConfig) {
  const {apiKey = 'argo_app_key', env, entry, resourceId, type, title = 'Argo Extension'} = config;
  const port = await getPort({port: config.port});
  const url = `http://localhost:${port}`;
  const publicPath = '/assets/';
  const filename = 'extension.js';
  const fileUrl = `${url}${publicPath}${filename}`;
  const sockPath = 'liveReload';

  const pathEnv = typeof env === 'string' ? path.resolve(env) : undefined;
  if (pathEnv === path.resolve('.env')) {
    throw new Error(
      'Cannot name environment file .env (in root folder) as this is in use in Shopify CLI',
    );
  }
  const dotEnvPlugin = pathEnv ? [new Dotenv({path: pathEnv})] : [];

  const clientWebpackConfig = createWebpackConfiguration({
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
  clientWebpackConfig.resolve.alias = alias;

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
        THIRD_PARTY_SCRIPT: JSON.stringify(fileUrl),
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

  let serverInitialized = false;
  const webpackCompiler = webpack([clientWebpackConfig, serverWebpackConfig]);
  webpackCompiler.hooks.done.tap('ArgoSimulator', () => {
    if (!serverInitialized) {
      console.log(`Your extension is available at ${url}`);
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

    before(app) {
      app.get('/data', function (req, res) {
        const protocol = req.headers['x-forwarded-proto'] || req.protocol;
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
          apiKey,
          type,
          resourceId,
          title,
          script: `${protocol}://${req.headers.host}${publicPath}${filename}`,
        });
      });
    },

    logLevel: 'silent',
    stats: process.env.DEBUG === undefined ? ('errors-only' as const) : ('verbose' as const),

    ...({reporter} as any),
  });
  server.listen(port, 'localhost', (err) => {
    if (err) {
      console.log('err', err);
      return;
    }
    console.log('Starting dev server...');
  });
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

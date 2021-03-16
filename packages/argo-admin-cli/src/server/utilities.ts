import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackDevMiddlewareReporter from 'webpack-dev-middleware/lib/reporter';

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
  disableLiveReload?: boolean;
}

export interface HostConfig {
  type: string;
  scriptUrl: string;
}

type DevServer = Pick<WebpackDevServer.Configuration, 'before'> & {
  port: number;
  sockPath: string;
};

export interface RunConfig {
  configs: ReturnType<typeof createWebpackConfiguration>[];
  devServer: DevServer;
  onReady?: () => void;
}

const alias = process.env.SHOPIFY_DEV
  ? {
      '@shopify/argo-admin': path.resolve(__dirname, '../../../argo-admin/src'),
      '@shopify/argo-admin-react': path.resolve(__dirname, '../../../argo-admin-react/src'),
    }
  : undefined;

export function createClientConfig(
  config: ClientConfig,
): ReturnType<typeof createWebpackConfiguration> {
  const {env, entry, port, sockPath, disableLiveReload} = config;
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
    entry: disableLiveReload
      ? [path.resolve(entry)]
      : [path.resolve(__dirname, './hot-client'), path.resolve(entry)],
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
        template: path.resolve(__dirname, './host/templates/index.ejs'),
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

export async function run({configs, devServer: {port, sockPath, before}, onReady}: RunConfig) {
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

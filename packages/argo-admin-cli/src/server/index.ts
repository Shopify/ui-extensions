import path from 'path';

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import getPort from 'get-port';
import Koa from 'koa';
import koaWebpack from 'koa-webpack';

import {createWebpackConfiguration} from '../webpackConfig';

import {ArgotHotClient} from './hot-client';

interface ServerConfig {
  port: number;
  entry: string;
  type: string;
  env?: string;
}

const alias = process.env.SHOPIFY_DEV
  ? {
      '@shopify/argo-admin': path.resolve(__dirname, '../../../argo-admin/src'),
      '@shopify/argo-admin-react': path.resolve(__dirname, '../../../argo-admin-react/src'),
      '@shopify/argo-admin-host': path.resolve(__dirname, '../../../argo-admin-host/src'),
    }
  : {};

async function setupClient({port, entry, env}: ServerConfig) {
  const url = `http://localhost:${port}`;

  const pathEnv = typeof env === 'string' ? path.resolve(env) : undefined;
  if (pathEnv === path.resolve('.env')) {
    throw new Error(
      'Cannot name environment file .env (in root folder) as this is in use in Shopify CLI',
    );
  }
  const dotEnvPlugin = pathEnv ? [new Dotenv({path: pathEnv})] : [];

  const staticCompilerConfig = createWebpackConfiguration({
    mode: 'development',
    target: 'webworker',
    entry: [path.resolve(__dirname, './hot-client/worker.ts'), path.resolve(entry)],
    output: {
      globalObject: 'self',
      filename: 'third-party-script.js',
      path: path.resolve(__dirname, 'build'),
    },
    devtool: 'source-map',
    plugins: [...dotEnvPlugin, new ArgotHotClient()],
  });
  staticCompilerConfig.resolve.alias = alias;

  const staticCompiler = webpack(staticCompilerConfig);

  let serverInitialized = false;

  staticCompiler.hooks.done.tap('ArgoSimulator', (stats) => {
    if (!serverInitialized) {
      console.log(`Your extension is available at ${url}`);
      serverInitialized = true;
    }
  });

  staticCompiler.hooks.thisCompilation.tap('ArgoSimulator', () => {
    if (serverInitialized) {
      console.log('Recompiling...');
    }
  });

  staticCompiler.hooks.afterCompile.tap('ArgoSimulator', (compilation) => {
    const compilerStats = compilation.getStats();
    if (compilerStats.hasErrors()) {
      compilerStats.toJson().errors.forEach((error) => {
        console.error('Error compiling:', error);
      });
      return;
    }
    if (serverInitialized) {
      console.log('Done!');
    }
  });

  const hotClientPort = await getPort();
  const app = new Koa();
  const middleware = await koaWebpack({
    compiler: staticCompiler,
    hotClient: {autoConfigure: false, logLevel: 'silent'},
    devMiddleware: {
      publicPath: './build',
      logLevel: 'silent',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      writeToDisk: true,
    },
  });
  app.use(middleware);
  await Promise.all([
    new Promise<void>((resolve) => {
      let hasResolved = false;
      staticCompiler.hooks.done.tap('HotClient', (stats) => {
        if (stats.hasErrors()) {
          console.log(`Build failed with errors: ${stats.toString('errors-only')}`, {
            error: true,
          });
          return;
        }
        if (hasResolved) {
          return;
        }
        hasResolved = true;
        resolve();
      });
    }),
    new Promise<void>((resolve) => {
      app.listen(hotClientPort, () => {
        resolve();
      });
    }),
  ]).catch(console.error);
}

function setupHost({port, type}: ServerConfig) {
  const url = `http://localhost:${port}`;

  const serverCompilerConfig = createWebpackConfiguration({
    mode: 'development',
    target: 'web',
    entry: {
      main: path.resolve(__dirname, './host/index'),
    },
    output: {
      globalObject: 'self',
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: `Argo Admin Simulator - ${type}`,
        template: path.resolve(__dirname, 'host/templates/index.ejs'),
      }),
      new webpack.DefinePlugin({
        THIRD_PARTY_SCRIPT: `"${url}/build/third-party-script.js"`,
        EXTENSION_POINT: `"${type}"`,
      }),
    ],
    devtool: false,
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

  serverCompilerConfig.resolve.alias = alias;

  const serverCompiler = webpack([serverCompilerConfig]);

  const serverConfig = {
    disableHostCheck: true,
    host: '0.0.0.0',
    hot: false,
    inline: process.env.SHOPIFY_DEV !== undefined,
    port,
    historyApiFallback: {
      rewrites: [
        {
          from: /./,
          to: '/index.html',
        },
      ],
    },
    contentBase: path.resolve(__dirname),
    noInfo: process.env.DEBUG === undefined,
    stats: process.env.DEBUG === undefined ? ('errors-only' as const) : ('verbose' as const),
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const server = new WebpackDevServer(serverCompiler, serverConfig);

  server.listen(port, 'localhost', (err) => {
    if (err) {
      console.log('err', err);
    }
    console.log(`Starting dev server...`);
  });
}

export async function server(config: ServerConfig) {
  setupClient(config);
  setupHost(config);
}

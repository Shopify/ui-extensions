import path from 'path';

import webpack, {ICompiler} from 'webpack';
import Dotenv from 'dotenv-webpack';

import {createWebpackConfiguration} from './webpackConfig';

export interface BuildConfig {
  entry: string;
  env?: string;
  output?: string;
  watch?: boolean;
}

export async function build({entry, env, output, watch}: BuildConfig) {
  const pathEnv = typeof env === 'string' ? path.resolve(env) : undefined;
  if (pathEnv === path.resolve('.env')) {
    throw new Error(
      'Cannot name environment file .env (in root folder) as this is in use in Shopify CLI',
    );
  }
  const dotEnvPlugin = pathEnv ? [new Dotenv({path: pathEnv})] : [];

  const outPath = output ? path.resolve(output) : path.resolve('.', 'build', 'main.js');

  const staticCompiler = webpack(
    createWebpackConfiguration({
      mode: 'production',
      target: 'webworker',
      entry: path.resolve(entry),
      output: {
        globalObject: 'self',
        filename: path.basename(outPath),
        path: path.dirname(outPath),
        publicPath: '/build/',
      },
      plugins: [
        new webpack.ProvidePlugin({
          React: 'react',
        }),
        ...dotEnvPlugin,
      ],
      devtool: false,
    }),
  );

  const compileHandler: ICompiler.Handler = (err) => {
    if (err) {
      console.error('Error compiling', err);
      return;
    }
    const relativeOutPath = path.relative(path.resolve('.'), outPath);
    console.log(`Successfully compiled: ${relativeOutPath}`);
  };
  if (watch) {
    staticCompiler.watch({}, compileHandler);
  } else {
    staticCompiler.run(compileHandler);
  }
}

import {resolve} from 'path';
import type {Configuration} from 'webpack';
import {ArgotHotClient} from '@shopify/argo-webpack-hot-client';

export function createWebpackConfiguration({
  entry,
  output,
}: Pick<Configuration, 'output'> & {entry: string}): Configuration {
  const useReact = shouldUseReact();

  return {
    mode: 'development',
    target: 'webworker',
    entry: ['@shopify/argo-webpack-hot-client/worker', entry],
    output: {
      globalObject: 'self',
      ...(output ?? {}),
    },
    resolve: {
      extensions: ['.esnext', '.mjs', '.ts', '.tsx', '.js', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
                useReact && '@babel/preset-react',
              ].filter(Boolean),
            },
          },
        },
        {
          test: /\.esnext$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
              ],
            },
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              presets: [
                [
                  '@babel/preset-env',
                  {modules: false, targets: 'last 2 versions'},
                ],
                '@babel/preset-typescript',
                useReact && '@babel/preset-react',
              ].filter(Boolean),
            },
          },
        },
      ],
    },
    plugins: [new ArgotHotClient()],
  };
}

function shouldUseReact() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(resolve('package.json'));
    return Object.keys(packageJson.dependencies).includes('react');
  } catch {
    return false;
  }
}

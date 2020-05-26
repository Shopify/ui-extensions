import type {Configuration} from 'webpack';
import {ArgotHotClient} from '@shopify/argo-webpack-hot-client';

import {babelConfig} from '../babel';
import {shouldUseReact} from '../utilities';

const DEVELOPMENT_BROWSERS = [
  'last 1 chrome version',
  'last 1 firefox version',
  'last 1 safari version',
  'last 1 edge version',
];

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
              ...babelConfig({
                react: useReact,
                typescript: false,
                targets: DEVELOPMENT_BROWSERS,
              }),
            },
          },
        },
        {
          test: /\.esnext$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              ...babelConfig({
                react: false,
                typescript: false,
                targets: DEVELOPMENT_BROWSERS,
              }),
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
              ...babelConfig({
                react: useReact,
                typescript: false,
                targets: DEVELOPMENT_BROWSERS,
              }),
            },
          },
        },
      ],
    },
    plugins: [new ArgotHotClient()],
  };
}

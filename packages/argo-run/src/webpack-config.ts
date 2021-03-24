import * as path from 'path';

import {sync as glob} from 'glob';
import {DefinePlugin} from 'webpack';
import type {Configuration} from 'webpack';
import {ArgotHotClient} from '@shopify/argo-webpack-hot-client';

import {shouldUseReact} from './utilities';

const PRODUCTION_TARGETS = undefined;

const DEVELOPMENT_TARGETS = [
  'last 1 chrome version',
  'last 1 firefox version',
  'last 1 safari version',
  'last 1 edge version',
];

interface Options {
  output?: Configuration['output'];
  development?: boolean;
  hotOptions?: ConstructorParameters<typeof ArgotHotClient>[0];
}

export function createWebpackConfiguration({
  output,
  development = false,
  hotOptions,
}: Options = {}): Configuration {
  const useReact = shouldUseReact();
  const targets = development ? DEVELOPMENT_TARGETS : PRODUCTION_TARGETS;
  const mode = development ? 'development' : 'production';

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const TerserWebpackPlugin = require('terser-webpack-plugin');

  return {
    mode,
    target: 'webworker',
    entry: development
      ? ['@shopify/argo-webpack-hot-client/worker', getEntry()]
      : getEntry(),
    output: {
      globalObject: 'self',
      path: path.resolve('build'),
      ...(output ?? {}),
    },
    optimization: development
      ? undefined
      : {
          concatenateModules: true,
          minimize: true,
          namedChunks: true,
          namedModules: true,
          runtimeChunk: false,
          splitChunks: false,
          minimizer: [
            new TerserWebpackPlugin({
              extractComments: {
                condition: /^\**!|@preserve|@license|@cc_on/i,
                filename: () => `LICENSE.txt`,
                banner: (licenseFilename: string) =>
                  `Licenses: ${licenseFilename}`,
              },
              terserOptions: {
                ecma: 5,
                warnings: false,
                // Per one of the authors of Preact, the extra pass may inline more esmodule imports
                // @see https://github.com/webpack-contrib/mini-css-extract-plugin/pull/509#issuecomment-599083073
                compress: {
                  passes: 2,
                },
                ie8: false,
                safari10: true,
                mangle: {
                  safari10: true,
                },
              },
            }),
          ],
        },
    resolve: {
      mainFields: ['esnext', 'browser', 'module', 'main'],
      extensions: ['.esnext', '.mjs', '.ts', '.tsx', '.js', '.json'],
      alias:
        useReact === 'mini'
          ? {
              react$: '@remote-ui/mini-react/compat',
              'react/jsx-runtime$': '@remote-ui/mini-react/jsx-runtime',
              'react-dom$': '@remote-ui/mini-react/compat',
              '@remote-ui/react$': '@remote-ui/mini-react/compat',
            }
          : {},
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|esnext)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              ...babelConfig({
                react: useReact,
                typescript: false,
                targets,
              }),
            },
          },
        },
        {
          test: /\.(js|esnext)$/,
          include: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              compact: true,
              ...babelConfig({
                react: false,
                typescript: false,
                targets,
              }),
            },
          },
        },
        {
          test: /\.(tsx?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: false,
              ...babelConfig({
                react: useReact,
                typescript: true,
                targets,
              }),
            },
          },
        },
      ],
    },
    plugins: [
      development && new ArgotHotClient(hotOptions),
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
    ].filter(Boolean) as any,
  };
}

const BABEL_PRESET_ENV_OPTIONS = {
  modules: false,
  useBuiltIns: false,
};

const BABEL_PLUGINS = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
  ['@babel/plugin-proposal-class-properties', {loose: true}],
];

export function babelConfig({
  react = false,
  typescript = false,
  targets,
}: {
  react?: ReturnType<typeof shouldUseReact>;
  typescript?: boolean;
  targets?: string[];
} = {}) {
  return {
    presets: [
      ['@babel/preset-env', {...BABEL_PRESET_ENV_OPTIONS, targets}],
      typescript && '@babel/preset-typescript',
      react && [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          importSource: react === 'mini' ? '@remote-ui/mini-react' : 'react',
        },
      ],
    ].filter(Boolean),
    plugins: BABEL_PLUGINS,
  };
}

function getEntry() {
  const indexFiles = glob('index.{ts,tsx,js}', {absolute: true});

  if (indexFiles.length > 0) {
    return indexFiles[0];
  }

  const srcIndexFiles = glob('src/index.{ts,tsx,js}', {absolute: true});

  if (srcIndexFiles) {
    return srcIndexFiles[0];
  }

  throw new Error(
    `No entry file found in ${process.cwd()}. Make sure you have a JavaScript or TypeScript index file at the root of your project, or nested in the /src directory`,
  );
}

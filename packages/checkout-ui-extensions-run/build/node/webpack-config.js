"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldUseReact = shouldUseReact;
exports.createWebpackConfiguration = createWebpackConfiguration;
exports.babelConfig = babelConfig;

var path = _interopRequireWildcard(require("path"));

var _glob = require("glob");

var _webpack = require("webpack");

var _uiExtensionsWebpackHotClient = require("@shopify/ui-extensions-webpack-hot-client");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const REACT_UI_EXTENSIONS_PACKAGES = ['@shopify/checkout-ui-extensions-react', '@shopify/post-purchase-ui-extensions-react'];

function shouldUseReact() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(path.resolve('package.json'));

    const dependencies = new Set(Object.keys(packageJson.dependencies));

    if (!REACT_UI_EXTENSIONS_PACKAGES.some(pkg => dependencies.has(pkg))) {
      return false;
    }

    return dependencies.has('@remote-ui/mini-react') ? 'mini' : true;
  } catch {
    return false;
  }
}

const PRODUCTION_TARGETS = undefined;
const DEVELOPMENT_TARGETS = ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version', 'last 1 edge version'];

function createWebpackConfiguration({
  output,
  development = false,
  hotOptions
} = {}) {
  const useReact = shouldUseReact();
  const targets = development ? DEVELOPMENT_TARGETS : PRODUCTION_TARGETS;
  const mode = development ? 'development' : 'production'; // eslint-disable-next-line @typescript-eslint/no-var-requires

  const TerserWebpackPlugin = require('terser-webpack-plugin');

  const plugins = [];

  if (development) {
    if (!hotOptions) {
      throw new Error('When development=true, hotOptions are required');
    }

    plugins.push(new _uiExtensionsWebpackHotClient.UIExtensionsHotClient(hotOptions));
  }

  return {
    mode,
    target: 'webworker',
    entry: development ? ['@shopify/ui-extensions-webpack-hot-client/worker', getEntry()] : getEntry(),
    output: {
      globalObject: 'self',
      path: path.resolve('build'),
      ...(output !== null && output !== void 0 ? output : {})
    },
    optimization: development ? undefined : {
      concatenateModules: true,
      minimize: true,
      namedChunks: true,
      namedModules: true,
      runtimeChunk: false,
      splitChunks: false,
      minimizer: [new TerserWebpackPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: () => `LICENSE.txt`,
          banner: licenseFilename => `Licenses: ${licenseFilename}`
        },
        terserOptions: {
          ecma: 5,
          warnings: false,
          // Per one of the authors of Preact, the extra pass may inline more esmodule imports
          // @see https://github.com/webpack-contrib/mini-css-extract-plugin/pull/509#issuecomment-599083073
          compress: {
            passes: 2
          },
          ie8: false,
          safari10: true,
          mangle: {
            safari10: true
          }
        }
      })]
    },
    resolve: {
      mainFields: ['esnext', 'browser', 'module', 'main'],
      extensions: ['.esnext', '.mjs', '.ts', '.tsx', '.js', '.json'],
      alias: useReact === 'mini' ? {
        react$: '@remote-ui/mini-react/compat',
        'react/jsx-runtime$': '@remote-ui/mini-react/jsx-runtime',
        'react-dom$': '@remote-ui/mini-react/compat',
        '@remote-ui/react$': '@remote-ui/mini-react/compat'
      } : {}
    },
    module: {
      rules: [{
        test: /\.(jsx?|esnext)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: false,
            ...babelConfig({
              react: useReact,
              typescript: false,
              targets
            })
          }
        }
      }, {
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
              targets
            })
          }
        }
      }, {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: false,
            ...babelConfig({
              react: useReact,
              typescript: true,
              targets
            })
          }
        }
      }]
    },
    plugins: [...plugins, new _webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    })].filter(Boolean)
  };
}

const BABEL_PRESET_ENV_OPTIONS = {
  modules: false,
  useBuiltIns: false
};
const BABEL_PLUGINS = ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-numeric-separator', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator', ['@babel/plugin-proposal-class-properties', {
  loose: true
}]];

function babelConfig({
  react = false,
  typescript = false,
  targets
} = {}) {
  return {
    presets: [['@babel/preset-env', { ...BABEL_PRESET_ENV_OPTIONS,
      targets
    }], typescript && '@babel/preset-typescript', react && ['@babel/preset-react', {
      runtime: 'automatic',
      importSource: react === 'mini' ? '@remote-ui/mini-react' : 'react'
    }]].filter(Boolean),
    plugins: BABEL_PLUGINS
  };
}

function getEntry() {
  const indexFiles = (0, _glob.sync)('index.{ts,tsx,js}', {
    absolute: true
  });

  if (indexFiles.length > 0) {
    return indexFiles[0];
  }

  const srcIndexFiles = (0, _glob.sync)('src/index.{ts,tsx,js}', {
    absolute: true
  });

  if (srcIndexFiles) {
    return srcIndexFiles[0];
  }

  throw new Error(`No entry file found in ${process.cwd()}. Make sure you have a JavaScript or TypeScript index file at the root of your project, or nested in the /src directory`);
}
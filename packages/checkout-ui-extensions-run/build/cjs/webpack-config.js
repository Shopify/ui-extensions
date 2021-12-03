"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var REACT_UI_EXTENSIONS_PACKAGES = ['@shopify/checkout-ui-extensions-react', '@shopify/post-purchase-ui-extensions-react'];

function shouldUseReact() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var packageJson = require(path.resolve('package.json'));

    var dependencies = new Set(Object.keys(packageJson.dependencies));

    if (!REACT_UI_EXTENSIONS_PACKAGES.some(function (pkg) {
      return dependencies.has(pkg);
    })) {
      return false;
    }

    return dependencies.has('@remote-ui/mini-react') ? 'mini' : true;
  } catch (_unused) {
    return false;
  }
}

var PRODUCTION_TARGETS = undefined;
var DEVELOPMENT_TARGETS = ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version', 'last 1 edge version'];

function createWebpackConfiguration() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      output = _ref.output,
      _ref$development = _ref.development,
      development = _ref$development === void 0 ? false : _ref$development,
      hotOptions = _ref.hotOptions;

  var useReact = shouldUseReact();
  var targets = development ? DEVELOPMENT_TARGETS : PRODUCTION_TARGETS;
  var mode = development ? 'development' : 'production'; // eslint-disable-next-line @typescript-eslint/no-var-requires

  var TerserWebpackPlugin = require('terser-webpack-plugin');

  var plugins = [];

  if (development) {
    if (!hotOptions) {
      throw new Error('When development=true, hotOptions are required');
    }

    plugins.push(new _uiExtensionsWebpackHotClient.UIExtensionsHotClient(hotOptions));
  }

  return {
    mode: mode,
    target: 'webworker',
    entry: development ? ['@shopify/ui-extensions-webpack-hot-client/worker', getEntry()] : getEntry(),
    output: _objectSpread({
      globalObject: 'self',
      path: path.resolve('build')
    }, output !== null && output !== void 0 ? output : {}),
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
          filename: function filename() {
            return "LICENSE.txt";
          },
          banner: function banner(licenseFilename) {
            return "Licenses: ".concat(licenseFilename);
          }
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
          options: _objectSpread({
            configFile: false
          }, babelConfig({
            react: useReact,
            typescript: false,
            targets: targets
          }))
        }
      }, {
        test: /\.(js|esnext)$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: _objectSpread({
            configFile: false,
            compact: true
          }, babelConfig({
            react: false,
            typescript: false,
            targets: targets
          }))
        }
      }, {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: _objectSpread({
            configFile: false
          }, babelConfig({
            react: useReact,
            typescript: true,
            targets: targets
          }))
        }
      }]
    },
    plugins: [].concat(plugins, [new _webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode)
    })]).filter(Boolean)
  };
}

var BABEL_PRESET_ENV_OPTIONS = {
  modules: false,
  useBuiltIns: false
};
var BABEL_PLUGINS = ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-numeric-separator', '@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator', ['@babel/plugin-proposal-class-properties', {
  loose: true
}]];

function babelConfig() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$react = _ref2.react,
      react = _ref2$react === void 0 ? false : _ref2$react,
      _ref2$typescript = _ref2.typescript,
      typescript = _ref2$typescript === void 0 ? false : _ref2$typescript,
      targets = _ref2.targets;

  return {
    presets: [['@babel/preset-env', _objectSpread(_objectSpread({}, BABEL_PRESET_ENV_OPTIONS), {}, {
      targets: targets
    })], typescript && '@babel/preset-typescript', react && ['@babel/preset-react', {
      runtime: 'automatic',
      importSource: react === 'mini' ? '@remote-ui/mini-react' : 'react'
    }]].filter(Boolean),
    plugins: BABEL_PLUGINS
  };
}

function getEntry() {
  var indexFiles = (0, _glob.sync)('index.{ts,tsx,js}', {
    absolute: true
  });

  if (indexFiles.length > 0) {
    return indexFiles[0];
  }

  var srcIndexFiles = (0, _glob.sync)('src/index.{ts,tsx,js}', {
    absolute: true
  });

  if (srcIndexFiles) {
    return srcIndexFiles[0];
  }

  throw new Error("No entry file found in ".concat(process.cwd(), ". Make sure you have a JavaScript or TypeScript index file at the root of your project, or nested in the /src directory"));
}
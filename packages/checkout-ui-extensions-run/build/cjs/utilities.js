"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namedArgument = namedArgument;
exports.log = log;
exports.loadExtension = loadExtension;
exports.getLegacyPostPurchaseData = getLegacyPostPurchaseData;
exports.convertLegacyPostPurchaseDataToQueryString = convertLegacyPostPurchaseDataToQueryString;
exports.parseDevelopmentServerConfig = parseDevelopmentServerConfig;
exports.urlGeneratorFor = exports.argumentParserFor = void 0;

var _url = require("url");

var _path = require("path");

var _fs = require("fs");

var _camelcaseKeys = _interopRequireDefault(require("camelcase-keys"));

var _chalk = _interopRequireDefault(require("chalk"));

var _jsYaml = require("js-yaml");

var _webpackConfig = require("./webpack-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var argumentParserFor = function argumentParserFor(args) {
  return function (name) {
    return namedArgument(name, args);
  };
}; // Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)


exports.argumentParserFor = argumentParserFor;

function namedArgument(name, args) {
  var flag = "--".concat(name);

  var reversedInterestingIndex = _toConsumableArray(args).reverse().findIndex(function (value) {
    return value.startsWith(flag);
  });

  if (reversedInterestingIndex < 0) return undefined;
  var interestingIndex = args.length - reversedInterestingIndex - 1;
  var arg = args[interestingIndex];
  var nextArg = args[interestingIndex + 1];
  return arg === flag ? nextArg : arg === null || arg === void 0 ? void 0 : arg.replace("".concat(flag, "="), '');
}

function log(message) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error;

  var separator = error ? _chalk["default"].red('>') : _chalk["default"].dim('>'); // eslint-disable-next-line no-console

  console.log("\uD83D\uDD2D ".concat(separator, " ").concat(message));
}

function loadExtension() {
  var config = readConfig();
  return config == null || !('extensionPoints' in config) ? {
    type: 'post-purchase',
    config: config
  } : {
    type: 'checkout',
    config: config
  };
}

function readConfig() {
  var configPath = (0, _path.resolve)((0, _path.join)(process.cwd(), 'extension.config.yml'));
  if (!(0, _fs.existsSync)(configPath)) return;
  var config = (0, _jsYaml.safeLoad)((0, _fs.readFileSync)(configPath, 'utf8'));
  return config && (0, _camelcaseKeys["default"])(config, {
    deep: true
  });
}

function readEnvFile() {
  var envPath = (0, _path.resolve)((0, _path.join)(process.cwd(), '.env'));

  if (!(0, _fs.existsSync)(envPath)) {
    return {};
  }

  var env = (0, _fs.readFileSync)(envPath, 'utf8').toString();
  var lines = env.split('\n').filter(Boolean);
  var parsedEnv = {};

  var _iterator = _createForOfIteratorHelper(lines),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var entry = _step.value;
      var matches = entry.match(/(.*?)=(.*)/);

      if (!matches || !matches[1]) {
        throw new Error("Can't parse: ".concat(entry));
      }

      parsedEnv[matches[1].trim()] = (matches[2] || '').trim();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return parsedEnv;
}

function getLegacyPostPurchaseData(scriptUrl, extension) {
  var env = readEnvFile();
  return {
    scriptUrl: scriptUrl,
    config: extension.config,
    apiKey: env.SHOPIFY_API_KEY || ''
  };
}

function convertLegacyPostPurchaseDataToQueryString(data) {
  var query = new _url.URLSearchParams();
  query.set('script_url', data.scriptUrl);

  if (data.config) {
    query.set('config', JSON.stringify(data.config));
  }

  if (data.apiKey) {
    query.set('api_key', data.apiKey);
  }

  return query.toString();
}

function parseDevelopmentServerConfig(args) {
  var fetchArgument = argumentParserFor(args);
  var port = fetchArgument('port') || '8910';
  var store = fetchArgument('store');
  var resourceUrl = fetchArgument('resourceUrl');
  var publicUrl = fetchArgument('publicUrl');
  var generatePublicUrl = urlGeneratorFor(publicUrl);
  var generateLocalUrl = urlGeneratorFor("http://localhost:".concat(port));
  var filename = 'extension.js';
  var path = "/assets/".concat(filename);
  var scriptUrl = generatePublicUrl(path) || generateLocalUrl(path);
  var generateShopUrl = urlGeneratorFor("https://".concat(store));
  var permalinkUrl = resourceUrl && publicUrl && store ? generateShopUrl(resourceUrl, {
    dev: generatePublicUrl('query').toString()
  }) : undefined;
  var passwordPageUrl = store && generateShopUrl('/password');
  var extensionPoint = fetchArgument('extension-point');
  var useSSL = scriptUrl.protocol === 'https:';
  var webpackConfiguration = (0, _webpackConfig.createWebpackConfiguration)({
    development: true,
    output: {
      filename: filename,
      publicPath: '/assets/'
    },
    hotOptions: {
      https: useSSL,
      webSocket: {
        host: scriptUrl.hostname,
        port: Number(scriptUrl.port) || (useSSL ? 443 : 80),
        path: '/build'
      }
    }
  });
  return {
    store: store,
    resourceUrl: resourceUrl,
    publicUrl: publicUrl,
    scriptUrl: scriptUrl.toString(),
    port: port,
    permalinkUrl: permalinkUrl === null || permalinkUrl === void 0 ? void 0 : permalinkUrl.toString(),
    passwordPageUrl: passwordPageUrl === null || passwordPageUrl === void 0 ? void 0 : passwordPageUrl.toString(),
    webpackConfiguration: webpackConfiguration,
    filename: filename,
    extensionPoint: extensionPoint
  };
}

var urlGeneratorFor = function urlGeneratorFor(baseUrl) {
  return function (path) {
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!baseUrl) return undefined;
    if (!path) return undefined;
    var url = new _url.URL(path, baseUrl);
    Object.keys(query).forEach(function (parameter) {
      url.searchParams.append(parameter, query[parameter]);
    });
    return url;
  };
};

exports.urlGeneratorFor = urlGeneratorFor;
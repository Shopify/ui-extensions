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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const argumentParserFor = args => name => {
  return namedArgument(name, args);
}; // Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)


exports.argumentParserFor = argumentParserFor;

function namedArgument(name, args) {
  const flag = `--${name}`;
  const reversedInterestingIndex = [...args].reverse().findIndex(value => value.startsWith(flag));
  if (reversedInterestingIndex < 0) return undefined;
  const interestingIndex = args.length - reversedInterestingIndex - 1;
  const arg = args[interestingIndex];
  const nextArg = args[interestingIndex + 1];
  return arg === flag ? nextArg : arg === null || arg === void 0 ? void 0 : arg.replace(`${flag}=`, '');
}

function log(message, {
  error = false
} = {}) {
  const separator = error ? _chalk.default.red('>') : _chalk.default.dim('>'); // eslint-disable-next-line no-console

  console.log(`🔭 ${separator} ${message}`);
}

function loadExtension() {
  const config = readConfig();
  return config == null || !('extensionPoints' in config) ? {
    type: 'post-purchase',
    config
  } : {
    type: 'checkout',
    config
  };
}

function readConfig() {
  const configPath = (0, _path.resolve)((0, _path.join)(process.cwd(), 'extension.config.yml'));
  if (!(0, _fs.existsSync)(configPath)) return;
  const config = (0, _jsYaml.safeLoad)((0, _fs.readFileSync)(configPath, 'utf8'));
  return config && (0, _camelcaseKeys.default)(config, {
    deep: true
  });
}

function readEnvFile() {
  const envPath = (0, _path.resolve)((0, _path.join)(process.cwd(), '.env'));

  if (!(0, _fs.existsSync)(envPath)) {
    return {};
  }

  const env = (0, _fs.readFileSync)(envPath, 'utf8').toString();
  const lines = env.split('\n').filter(Boolean);
  const parsedEnv = {};

  for (const entry of lines) {
    const matches = entry.match(/(.*?)=(.*)/);

    if (!matches || !matches[1]) {
      throw new Error(`Can't parse: ${entry}`);
    }

    parsedEnv[matches[1].trim()] = (matches[2] || '').trim();
  }

  return parsedEnv;
}

function getLegacyPostPurchaseData(scriptUrl, extension) {
  const env = readEnvFile();
  return {
    scriptUrl,
    config: extension.config,
    apiKey: env.SHOPIFY_API_KEY || ''
  };
}

function convertLegacyPostPurchaseDataToQueryString(data) {
  const query = new _url.URLSearchParams();
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
  const fetchArgument = argumentParserFor(args);
  const port = fetchArgument('port') || '8910';
  const store = fetchArgument('store');
  const resourceUrl = fetchArgument('resourceUrl');
  const publicUrl = fetchArgument('publicUrl');
  const generatePublicUrl = urlGeneratorFor(publicUrl);
  const generateLocalUrl = urlGeneratorFor(`http://localhost:${port}`);
  const filename = 'extension.js';
  const path = `/assets/${filename}`;
  const scriptUrl = generatePublicUrl(path) || generateLocalUrl(path);
  const generateShopUrl = urlGeneratorFor(`https://${store}`);
  const permalinkUrl = resourceUrl && publicUrl && store ? generateShopUrl(resourceUrl, {
    dev: generatePublicUrl('query').toString()
  }) : undefined;
  const passwordPageUrl = store && generateShopUrl('/password');
  const extensionPoint = fetchArgument('extension-point');
  const useSSL = scriptUrl.protocol === 'https:';
  const webpackConfiguration = (0, _webpackConfig.createWebpackConfiguration)({
    development: true,
    output: {
      filename,
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
    store,
    resourceUrl,
    publicUrl,
    scriptUrl: scriptUrl.toString(),
    port,
    permalinkUrl: permalinkUrl === null || permalinkUrl === void 0 ? void 0 : permalinkUrl.toString(),
    passwordPageUrl: passwordPageUrl === null || passwordPageUrl === void 0 ? void 0 : passwordPageUrl.toString(),
    webpackConfiguration,
    filename,
    extensionPoint
  };
}

const urlGeneratorFor = baseUrl => (path, query = {}) => {
  if (!baseUrl) return undefined;
  if (!path) return undefined;
  const url = new _url.URL(path, baseUrl);
  Object.keys(query).forEach(parameter => {
    url.searchParams.append(parameter, query[parameter]);
  });
  return url;
};

exports.urlGeneratorFor = urlGeneratorFor;
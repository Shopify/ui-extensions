"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlGeneratorFor = exports.parseDevelopmentServerConfig = exports.convertLegacyPostPurchaseDataToQueryString = exports.getLegacyPostPurchaseData = exports.loadExtension = exports.log = exports.namedArgument = exports.argumentParserFor = void 0;
const url_1 = require("url");
const path_1 = require("path");
const fs_1 = require("fs");
const camelcase_keys_1 = __importDefault(require("camelcase-keys"));
const chalk_1 = __importDefault(require("chalk"));
const js_yaml_1 = require("js-yaml");
const webpack_config_1 = require("./webpack-config");
const argumentParserFor = (args) => (name) => {
    return namedArgument(name, args);
};
exports.argumentParserFor = argumentParserFor;
// Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)
function namedArgument(name, args) {
    const flag = `--${name}`;
    const reversedInterestingIndex = [...args]
        .reverse()
        .findIndex((value) => value.startsWith(flag));
    if (reversedInterestingIndex < 0)
        return undefined;
    const interestingIndex = args.length - reversedInterestingIndex - 1;
    const arg = args[interestingIndex];
    const nextArg = args[interestingIndex + 1];
    return arg === flag ? nextArg : arg === null || arg === void 0 ? void 0 : arg.replace(`${flag}=`, '');
}
exports.namedArgument = namedArgument;
function log(message, { error = false } = {}) {
    const separator = error ? chalk_1.default.red('>') : chalk_1.default.dim('>');
    // eslint-disable-next-line no-console
    console.log(`🔭 ${separator} ${message}`);
}
exports.log = log;
function loadExtension() {
    const config = readConfig();
    return config == null || !('extensionPoints' in config)
        ? {
            type: 'post-purchase',
            config,
        }
        : {
            type: 'checkout',
            config,
        };
}
exports.loadExtension = loadExtension;
function readConfig() {
    const configPath = path_1.resolve(path_1.join(process.cwd(), 'extension.config.yml'));
    if (!fs_1.existsSync(configPath))
        return;
    const config = js_yaml_1.safeLoad(fs_1.readFileSync(configPath, 'utf8'));
    return config && camelcase_keys_1.default(config, { deep: true });
}
function readEnvFile() {
    const envPath = path_1.resolve(path_1.join(process.cwd(), '.env'));
    if (!fs_1.existsSync(envPath)) {
        return {};
    }
    const env = fs_1.readFileSync(envPath, 'utf8').toString();
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
        apiKey: env.SHOPIFY_API_KEY || '',
    };
}
exports.getLegacyPostPurchaseData = getLegacyPostPurchaseData;
function convertLegacyPostPurchaseDataToQueryString(data) {
    const query = new url_1.URLSearchParams();
    query.set('script_url', data.scriptUrl);
    if (data.config) {
        query.set('config', JSON.stringify(data.config));
    }
    if (data.apiKey) {
        query.set('api_key', data.apiKey);
    }
    return query.toString();
}
exports.convertLegacyPostPurchaseDataToQueryString = convertLegacyPostPurchaseDataToQueryString;
function parseDevelopmentServerConfig(args) {
    const fetchArgument = exports.argumentParserFor(args);
    const port = fetchArgument('port') || '8910';
    const store = fetchArgument('store');
    const resourceUrl = fetchArgument('resourceUrl');
    const publicUrl = fetchArgument('publicUrl');
    const generatePublicUrl = exports.urlGeneratorFor(publicUrl);
    const generateLocalUrl = exports.urlGeneratorFor(`http://localhost:${port}`);
    const filename = 'extension.js';
    const path = `/assets/${filename}`;
    const scriptUrl = (generatePublicUrl(path) || generateLocalUrl(path));
    const generateShopUrl = exports.urlGeneratorFor(`https://${store}`);
    const permalinkUrl = resourceUrl && publicUrl && store
        ? generateShopUrl(resourceUrl, {
            dev: generatePublicUrl('query').toString(),
        })
        : undefined;
    const passwordPageUrl = store && generateShopUrl('/password');
    const extensionPoint = fetchArgument('extension-point');
    const useSSL = scriptUrl.protocol === 'https:';
    const webpackConfiguration = webpack_config_1.createWebpackConfiguration({
        development: true,
        output: {
            filename,
            publicPath: '/assets/',
        },
        hotOptions: {
            https: useSSL,
            webSocket: {
                host: scriptUrl.hostname,
                port: Number(scriptUrl.port) || (useSSL ? 443 : 80),
                path: '/build',
            },
        },
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
        extensionPoint,
    };
}
exports.parseDevelopmentServerConfig = parseDevelopmentServerConfig;
const urlGeneratorFor = (baseUrl) => (path, query = {}) => {
    if (!baseUrl)
        return undefined;
    if (!path)
        return undefined;
    const url = new url_1.URL(path, baseUrl);
    Object.keys(query).forEach((parameter) => {
        url.searchParams.append(parameter, query[parameter]);
    });
    return url;
};
exports.urlGeneratorFor = urlGeneratorFor;

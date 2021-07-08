import {URL, URLSearchParams} from 'url';
import {resolve, join} from 'path';
import {readFileSync, existsSync} from 'fs';
import camelcaseKeys from 'camelcase-keys';
import chalk from 'chalk';
import {safeLoad as loadYaml} from 'js-yaml';

import {createWebpackConfiguration} from './webpack-config';

export const argumentParserFor = (args: string[]) => (name: string) => {
  return namedArgument(name, args);
};

// Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)
export function namedArgument(
  name: string,
  args: readonly string[],
): string | undefined {
  const flag = `--${name}`;

  const reversedInterestingIndex = [...args]
    .reverse()
    .findIndex((value) => value.startsWith(flag));

  if (reversedInterestingIndex < 0) return undefined;

  const interestingIndex = args.length - reversedInterestingIndex - 1;

  const arg = args[interestingIndex];
  const nextArg = args[interestingIndex + 1];

  return arg === flag ? nextArg : arg?.replace(`${flag}=`, '');
}

export function log(message: string, {error = false} = {}) {
  const separator = error ? chalk.red('>') : chalk.dim('>');
  // eslint-disable-next-line no-console
  console.log(`🔭 ${separator} ${message}`);
}

export interface CheckoutExtensionConfig {
  readonly extensionPoints: string[];
  readonly metafields?: {namespace: string; key: string}[];
}

export interface CheckoutExtension {
  readonly type: 'checkout';
  readonly config: CheckoutExtensionConfig;
}

export interface PostPurchaseExtensionConfig {
  readonly metafields?: any;
}

export interface PostPurchaseExtension {
  readonly type: 'post-purchase';
  readonly config?: PostPurchaseExtensionConfig;
}

export type Extension = CheckoutExtension | PostPurchaseExtension;

export interface DevelopmentServerConfiguration {
  port: string;
  scriptUrl: string;
  filename: string;
  store?: string;
  resourceUrl?: string;
  publicUrl?: string;
  passwordPageUrl?: string;
  permalinkUrl?: string;
  extensionPoint?: string;
}

export function loadExtension(): Extension {
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

function readConfig() {
  const configPath = resolve(join(process.cwd(), 'extension.config.yml'));
  if (!existsSync(configPath)) return;

  const config = loadYaml(readFileSync(configPath, 'utf8')) as
    | CheckoutExtensionConfig
    | PostPurchaseExtensionConfig
    | undefined;

  return config && camelcaseKeys(config, {deep: true});
}

type EnvFile = Record<string, string>;
interface Data {
  scriptUrl: string;
  config: any;
  apiKey: string;
}

function readEnvFile() {
  const envPath = resolve(join(process.cwd(), '.env'));

  if (!existsSync(envPath)) {
    return {};
  }

  const env = readFileSync(envPath, 'utf8').toString();
  const lines = env.split('\n').filter(Boolean);
  const parsedEnv = {} as EnvFile;

  for (const entry of lines) {
    const matches = entry.match(/(.*?)=(.*)/);
    if (!matches || !matches[1]) {
      throw new Error(`Can't parse: ${entry}`);
    }

    parsedEnv[matches[1].trim()] = (matches[2] || '').trim();
  }

  return parsedEnv;
}

export function getLegacyPostPurchaseData(
  scriptUrl: string,
  extension: Extension,
): Data {
  const env = readEnvFile();

  return {
    scriptUrl,
    config: extension.config,
    apiKey: env.SHOPIFY_API_KEY || '',
  };
}

export function convertLegacyPostPurchaseDataToQueryString(data: Data) {
  const query = new URLSearchParams();

  query.set('script_url', data.scriptUrl);

  if (data.config) {
    query.set('config', JSON.stringify(data.config));
  }

  if (data.apiKey) {
    query.set('api_key', data.apiKey);
  }

  return query.toString();
}

export function parseDevelopmentServerConfig(args: string[]) {
  const fetchArgument = argumentParserFor(args);
  const port = fetchArgument('port') || '8910';
  const store = fetchArgument('store');
  const resourceUrl = fetchArgument('resourceUrl');
  const publicUrl = fetchArgument('publicUrl');
  const generatePublicUrl = urlGeneratorFor(publicUrl);
  const generateLocalUrl = urlGeneratorFor(`http://localhost:${port}`);
  const filename = 'extension.js';
  const path = `/assets/${filename}`;
  const scriptUrl = (generatePublicUrl(path) || generateLocalUrl(path))!;
  const generateShopUrl = urlGeneratorFor(`https://${store}`);
  const permalinkUrl =
    resourceUrl && publicUrl && store
      ? generateShopUrl(resourceUrl, {
          dev: generatePublicUrl('query')!.toString(),
        })
      : undefined;
  const passwordPageUrl = store && generateShopUrl('/password');
  const extensionPoint = fetchArgument('extension-point');
  const useSSL = scriptUrl.protocol === 'https:';
  const webpackConfiguration = createWebpackConfiguration({
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
    permalinkUrl: permalinkUrl?.toString(),
    passwordPageUrl: passwordPageUrl?.toString(),
    webpackConfiguration,
    filename,
    extensionPoint,
  };
}

export const urlGeneratorFor = (baseUrl?: string) => (
  path?: string,
  query: Record<string, string> = {},
): URL | undefined => {
  if (!baseUrl) return undefined;
  if (!path) return undefined;

  const url = new URL(path, baseUrl);
  Object.keys(query).forEach((parameter) => {
    url.searchParams.append(parameter, query[parameter]);
  });

  return url;
};

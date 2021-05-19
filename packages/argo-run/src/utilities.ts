import {URLSearchParams} from 'url';
import {resolve, join} from 'path';
import {readFileSync, existsSync} from 'fs';
import camelcaseKeys from 'camelcase-keys';
import chalk from 'chalk';

import {safeLoad as loadYaml} from 'js-yaml';

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

const REACT_ARGO_PACKAGES = [
  '@shopify/argo-checkout-react',
  '@shopify/argo-post-purchase-react',
];

export function shouldUseReact(): boolean | 'mini' {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(resolve('package.json'));
    const dependencies = new Set(Object.keys(packageJson.dependencies));

    if (!REACT_ARGO_PACKAGES.some((pkg) => dependencies.has(pkg))) {
      return false;
    }

    return dependencies.has('@remote-ui/mini-react') ? 'mini' : true;
  } catch {
    return false;
  }
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

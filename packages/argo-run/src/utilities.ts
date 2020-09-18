import {URLSearchParams} from 'url';
import {resolve, join} from 'path';
import {readFileSync, existsSync} from 'fs';
import chalk from 'chalk';

import {safeLoad as loadYaml} from 'js-yaml';

// Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)
export function namedArgument(
  name: string,
  args: string[],
): string | undefined {
  const flag = `--${name}`;
  const interestingIndex = args.findIndex((value) => value.startsWith(flag));

  if (interestingIndex < 0) return undefined;

  const arg = args[interestingIndex];
  const nextArg = args[interestingIndex + 1];

  return arg === flag ? nextArg : arg?.replace(`${flag}=`, '');
}

export function log(message: string, {error = false} = {}) {
  const separator = error ? chalk.red('>') : chalk.dim('>');
  // eslint-disable-next-line no-console
  console.log(`🔭 ${separator} ${message}`);
}

export function shouldUseReact() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const packageJson = require(resolve('package.json'));
    return Object.keys(packageJson.dependencies).includes('react');
  } catch {
    return false;
  }
}

export function readConfig() {
  const configPath = resolve(join(process.cwd(), 'extension.config.yml'));
  if (!existsSync(configPath)) {
    return null;
  }

  try {
    return loadYaml(readFileSync(configPath, 'utf8'));
  } catch (error) {
    log('Failed parsing extension.config.yml', {error: true});
    log(error, {error: true});
    return null;
  }
}

type EnvFile = Record<string, string>;
interface Data {
  scriptUrl: string;
  config: any;
  apiKey: string;
}

export function readEnvFile() {
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

export function getData(scriptUrl: string): Data {
  const config = readConfig();
  const env = readEnvFile();

  return {
    scriptUrl,
    config,
    apiKey: env.SHOPIFY_API_KEY || '',
  };
}

export function convertDataToQueryString(data: Data) {
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

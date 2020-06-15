import {resolve} from 'path';
import chalk from 'chalk';

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

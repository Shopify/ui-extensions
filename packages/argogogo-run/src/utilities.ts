import {resolve} from 'path';
import {sync as glob} from 'glob';

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
  const separator = error ? '\u001b[31m>\u001b[39m' : '\u001b[2m>\u001b[22m';
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

export function getEntry() {
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

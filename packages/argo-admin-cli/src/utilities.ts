import chalk from 'chalk';

export function log(message: string, {error = false} = {}) {
  const separator = error ? chalk.red('>') : chalk.dim('>');
  console.log(`🔭 ${separator} ${message}`);
}

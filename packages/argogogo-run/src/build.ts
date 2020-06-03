import * as fs from 'fs';
import * as path from 'path';

import chalk from 'chalk';
import webpack from 'webpack';
import brotliSize from 'brotli-size';
import gzipSize from 'gzip-size';
import prettyBytes from 'pretty-bytes';

import {log, namedArgument} from './utilities';
import {createWebpackConfiguration} from './webpack-config';

export async function build(...args: string[]) {
  log('Starting production build');

  const filename = getFileNameFromArgs(args);
  const outputPath = path.resolve('build');

  const compiler = webpack(
    createWebpackConfiguration({
      output: {path: outputPath, filename},
    }),
  );

  try {
    await new Promise<import('webpack').Stats>((resolve, reject) => {
      compiler.run((error, stats) => {
        if (error) {
          reject(error);
          return;
        }

        if (stats.hasErrors()) {
          reject(new Error(stats.toString('errors-only')));
        }

        resolve(stats);
      });
    });

    const file = fs.readFileSync(path.join(outputPath, filename));
    const gzip = await gzipSize(file);
    const brotli = await brotliSize(file);

    const color =
      // eslint-disable-next-line no-nested-ternary
      file.length < 5000
        ? chalk.green
        : file.length > 40_000
        ? chalk.red
        : chalk.yellow;

    log(`Build completed successfully`);
    log(
      color(
        `size: ${prettyBytes(file.length)} / gzip: ${prettyBytes(
          gzip,
        )} / brotli: ${prettyBytes(brotli)}`,
      ),
    );
  } catch (error) {
    log('An error was thrown while building your extension:', {error: true});
    // eslint-disable-next-line no-console
    console.error(error);
    process.exitCode = 1;
  }
}

const DEFAULT_FILE_NAME = 'main';

function getFileNameFromArgs(args: string[]) {
  const filename = namedArgument('filename', args) ?? DEFAULT_FILE_NAME;
  return filename.endsWith('.js') ? filename : `${filename}.js`;
}

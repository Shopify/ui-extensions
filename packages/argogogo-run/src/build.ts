import webpack from 'webpack';

import {log, namedArgument} from './utilities';
import {createWebpackConfiguration} from './webpack-config';

export async function build(...args: string[]) {
  log('Starting production build');

  try {
    const compiler = webpack(
      createWebpackConfiguration({
        output: {filename: getFileNameFromArgs(args)},
      }),
    );

    await new Promise((resolve, reject) => {
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

    log(`Build completed successfully`);
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

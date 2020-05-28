import {resolve} from 'path';
import {rollup} from 'rollup';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

import {babelConfig} from './babel';
import {log, shouldUseReact, getEntry, namedArgument} from './utilities';

export async function build(..._args: string[]) {
  log('Starting production build');

  try {
    const build = await rollup({
      input: getEntry(),
      treeshake: {
        propertyReadSideEffects: false,
      },
      plugins: [
        nodeResolve({
          extensions: ['.esnext', '.ts', '.tsx', '.mjs', '.js', '.json'],
        }),
        commonjs(),
        babel({
          compact: true,
          babelrc: false,
          configFile: false,
          ...babelConfig({
            react: shouldUseReact(),
            typescript: true,
          }),
          extensions: ['.esnext', '.ts', '.tsx', '.mjs', '.js'],
          exclude: ['**/node_modules', '!*.esnext'],
          babelHelpers: 'bundled',
        }),
        terser(),
      ],
      onwarn: () => {},
    });

    await build.write({
      file: resolve(`build/${getFileNameFromArgs(_args)}.js`),
      format: 'iife',
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
  const fileName = namedArgument('filename', args);
  return fileName || DEFAULT_FILE_NAME;
}

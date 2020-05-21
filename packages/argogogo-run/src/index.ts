import {resolve} from 'path';
import {URL} from 'url';
import getPort from 'get-port';
import webpack from 'webpack';
import Koa from 'koa';
import koaWebpack from 'koa-webpack';

import {openBrowser} from './browser';
import {createWebpackConfiguration} from './webpack-config';

const PRODUCTION_PLAYGROUND_URL = 'https://argogogo.dev';

run();

async function run() {
  const port = await getPort({port: 8910});
  const url = `http://localhost:${port}`;
  const publicPath = `${url}/assets/`;
  const filename = 'extension.js';
  const fileUrl = `${publicPath}${filename}`;
  const args = process.argv.slice(2);

  const compiler = webpack(
    createWebpackConfiguration({
      entry: resolve('index'),
      output: {
        filename,
        publicPath,
      },
    }),
  );

  const firstCompilePromise = new Promise((resolve) => {
    let hasResolved = false;

    compiler.hooks.done.tap('Argogogo.FirstCompile', (stats) => {
      if (stats.hasErrors()) {
        log(
          `Webpack build failed with errors:${stats.toString('errors-only')}`,
          {error: true},
        );

        return;
      }

      if (!hasResolved) {
        hasResolved = true;
        resolve();
      }
    });
  });

  const app = new Koa();
  const middleware = await koaWebpack({
    compiler,
    hotClient: {autoConfigure: false, logLevel: 'silent'},
    devMiddleware: {
      publicPath,
      logLevel: 'silent',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  });

  app.use(middleware);

  log(`Starting dev server on ${url}`);
  log(`Your script is available at ${fileUrl}`);

  const httpListenPromise = new Promise((resolve) => {
    app.listen(port, () => {
      resolve();
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  const openUrl = new URL(playgroundUrl(args));
  const extensionPoint = namedArgument('extension-point', args);
  openUrl.searchParams.set('extension', JSON.stringify(fileUrl));

  if (extensionPoint) {
    openUrl.searchParams.set('extension-point', extensionPoint);
  }

  const opened = openBrowser(openUrl.href);
  if (opened) {
    log(`Opening a preview of your extension at ${openUrl.href}`);
  } else {
    log(`You can see a preview of your extension at ${openUrl.href}`);
  }
}

function playgroundUrl(args: string[]) {
  const url = namedArgument('playground', args);
  return url?.startsWith('http') ? url.trim() : PRODUCTION_PLAYGROUND_URL;
}

// Extract `--name x` or `--name=x` from an argv array.
// Could bring in a CLI arg library, but this is fun practice :)
function namedArgument(name: string, args: string[]): string | undefined {
  const flag = `--${name}`;
  const interestingIndex = args.findIndex((value) => value.startsWith(flag));

  if (interestingIndex < 0) return PRODUCTION_PLAYGROUND_URL;

  const [arg, nextArg = ''] = args;

  return arg === flag ? nextArg : arg.replace(`${flag}=`, '');
}

function log(message: string, {error = false} = {}) {
  const separator = error ? '\u001b[31m>\u001b[39m' : '\u001b[2m>\u001b[22m';
  // eslint-disable-next-line no-console
  console.log(`🔭 ${separator} ${message}`);
}

import {resolve} from 'path';
import getPort from 'get-port';
import webpack from 'webpack';
import Koa from 'koa';
import koaWebpack from 'koa-webpack';

import {openBrowser} from './browser';
import {createWebpackConfiguration} from './webpack-config';

run();

async function run() {
  const port = await getPort({port: 8910});
  const url = `http://localhost:${port}`;
  const publicPath = `${url}/assets/`;
  const filename = 'extension.js';

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
    hotClient: false,
    devMiddleware: {
      publicPath,
      logLevel: 'silent',
    },
  });

  app.use(middleware);

  log(`Starting dev server at ${url}`);

  const httpListenPromise = new Promise((resolve) => {
    app.listen(port, () => {
      resolve();
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  const openUrl = `https://checkout-dev.myshopify.io/playground?extension=${encodeURIComponent(
    JSON.stringify(`${publicPath}${filename}`),
  )}`;

  const opened = openBrowser(openUrl);
  if (opened) {
    log(`Opening a preview of your extension at ${openUrl}`);
  } else {
    log(`You can see a preview of your extension at ${openUrl}`);
  }
}

function log(message: string, {error = false} = {}) {
  const separator = error ? '\u001b[31m>\u001b[39m' : '\u001b[2m>\u001b[22m';
  // eslint-disable-next-line no-console
  console.log(`🔭 ${separator} ${message}`);
}

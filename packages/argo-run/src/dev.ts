import {URL} from 'url';
import getPort from 'get-port';
import webpack from 'webpack';
import Koa from 'koa';
import koaWebpack from 'koa-webpack';

import {log, namedArgument} from './utilities';
import {createWebpackConfiguration} from './webpack-config';
import {openBrowser} from './browser';

export async function dev(...args: string[]) {
  const port = namedArgument('port', args) ?? (await getPort({port: 8910}));
  const url = `http://localhost:${port}`;
  const publicPath = `${url}/assets/`;
  const filename = 'extension.js';
  const fileUrl = `${publicPath}${filename}`;

  const compiler = webpack(
    createWebpackConfiguration({
      development: true,
      output: {
        filename,
        publicPath,
      },
    }),
  );

  const firstCompilePromise = new Promise((resolve) => {
    let hasResolved = false;

    compiler.hooks.done.tap('Argogogo.Compiled', (stats) => {
      if (stats.hasErrors()) {
        log(`Build failed with errors: ${stats.toString('errors-only')}`, {
          error: true,
        });

        return;
      }

      if (hasResolved) {
        log(`Rebuilt your extension`);
      } else {
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

  const httpListenPromise = new Promise((resolve) => {
    app.listen(port, () => {
      resolve();
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  log(`Your extension is available at ${fileUrl}`);

  const openUrl = getOpenUrl(args);

  if (openUrl) {
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
}

function getOpenUrl(args: string[]) {
  const openArg = namedArgument('open', args);
  return (openArg ?? '').startsWith('http') ? new URL(openArg!) : undefined;
}

import {URL} from 'url';

import getPort from 'get-port';
import webpack from 'webpack';
import Koa from 'koa';
import koaWebpack from 'koa-webpack';

import {
  getData,
  convertDataToQueryString,
  log,
  namedArgument,
} from './utilities';
import {createWebpackConfiguration} from './webpack-config';
import {openBrowser} from './browser';

export async function dev(...args: string[]) {
  const port = namedArgument('port', args) ?? (await getPort({port: 8910}));
  const url = `http://localhost:${port}`;
  const publicPath = `${url}/assets/`;
  const filename = 'extension.js';
  const fileUrl = `${publicPath}${filename}`;
  const configPath = `/config`;
  const dataPath = '/data';

  const compiler = webpack(
    createWebpackConfiguration({
      development: true,
      output: {
        filename,
        publicPath,
      },
    }),
  );

  const data = getData(fileUrl);

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

  // this will stay here for older versions of the extension and can be removed on 01.10.2020
  // it's not being DRY'd up to make deletion easier
  if (data.config) {
    app.use(async (ctx, next) => {
      if (ctx.path !== configPath) {
        return next();
      }
      ctx.body = data.config;
    });
  }

  app.use(async (ctx, next) => {
    if (ctx.path !== dataPath) {
      return next();
    }

    ctx.body = data;
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

  log(`You can append this query string: ${convertDataToQueryString(data)}`);

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

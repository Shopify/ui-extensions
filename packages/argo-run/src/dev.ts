import {URL, URLSearchParams} from 'url';
import {readFileSync, existsSync} from 'fs';
import {resolve, join} from 'path';
import {safeLoad as loadYaml} from 'js-yaml';
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
  const configPath = `/config`;

  const compiler = webpack(
    createWebpackConfiguration({
      development: true,
      output: {
        filename,
        publicPath,
      },
    }),
  );

  const extensionConfig = readConfig();

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

  if (extensionConfig) {
    app.use(async (ctx, next) => {
      if (ctx.path !== configPath) {
        return next();
      }
      ctx.body = extensionConfig;
    });
  }

  app.use(middleware);

  log(`Starting dev server on ${url}`);

  const httpListenPromise = new Promise((resolve) => {
    app.listen(port, () => {
      resolve();
    });
  });

  await Promise.all([firstCompilePromise, httpListenPromise]);

  log(`Your extension is available at ${fileUrl}`);

  // we could replace this with a check for extension type
  // to only show the query parameters for post purchase extensions
  if (extensionConfig) {
    const query = new URLSearchParams();

    query.set('script_url', fileUrl);
    query.set('config', JSON.stringify(extensionConfig));

    log(`You can append this query string: ${query.toString()}`);
  }

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

function readConfig() {
  const configPath = resolve(join(process.cwd(), 'extension.config.yml'));
  if (!existsSync(configPath)) {
    return null;
  }

  try {
    return loadYaml(readFileSync(configPath, 'utf8'));
  } catch {
    return null;
  }
}

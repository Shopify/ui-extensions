import {URL} from 'url';

import {log, namedArgument} from './utilities';
import {serve} from './serve';
import {openBrowser} from './browser';

const PRODUCTION_PLAYGROUND_URL = 'https://argogogo.dev';

export async function dev(...args: string[]) {
  const fileUrl = await serve(...args);

  const openUrl = new URL(playgroundUrl(args));
  const extensionPoint = namedArgument('extension-point', args);

  openUrl.searchParams.set('extension', JSON.stringify(fileUrl.href));

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

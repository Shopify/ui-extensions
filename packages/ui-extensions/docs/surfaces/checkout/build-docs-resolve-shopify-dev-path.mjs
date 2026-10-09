/* eslint-disable no-undef, no-console */
import {stderr} from 'process';
import {fileURLToPath} from 'url';

import {resolveShopifyDevPath} from '../build-doc-shared.mjs';

const rootPath = fileURLToPath(new URL('../../..', import.meta.url));
const shopifyDevPath = await resolveShopifyDevPath(rootPath, {
  promptOutput: stderr,
});

console.log(shopifyDevPath);

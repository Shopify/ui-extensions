/**
 * Templates
 *

/* api.ts */
function newApiTemplate(page, id, name) {
  return `
// Update APIs for your needs
import {ToastApi, DataApi} from '../../extension-api';
import {ExtensionPoint} from '../extension-point';
import {StandardApi} from '../standard-api';

export type ${name}Api<T extends ExtensionPoint> = StandardApi<T> & ToastApi & DataApi<T>;

export interface ${page}ExtensionApi {
  '${id}': ${name}Api<'${id}'>;
}
`.trimStart();
}

/* callback.ts */
function newCallbackTemplate(page, id, name) {
  return `
import {RemoteRoot} from '@remote-ui/core';

import {ExtensionPointSchema} from '../../components/schemas';
import {RenderableExtensionCallback} from '../renderable-extension-callback';

import {${name}Api} from './api';

export interface ${page}ExtensionPointCallback {
  '${id}': RenderableExtensionCallback<
    ${name}Api<'${id}'>,
    RemoteRoot<ExtensionPointSchema['${id}']>
  >;
}
`.trimStart();
}

/* index.ts */
function indexTemplate(page) {
  return `
export {${page}ExtensionPointCallback} from './callback';
export {${page}ExtensionApi} from './api';
`.trimStart();
}

module.exports = {
  newApiTemplate,
  newCallbackTemplate,
  indexTemplate,
};

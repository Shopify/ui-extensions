import {render as remoteRender} from '@shopify/rui-react';
import {createElement, ReactElement} from 'react';

import {render as coreRender} from '../api';
import {ExtensionApi, ExtensionPoint} from '../extension-points';
import {ExtensionApiContext} from './extension-api/utils';

export type RenderCallback<T extends ExtensionPoint> = (api: ExtensionApi[T]) => ReactElement;

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  renderCallback: RenderCallback<T>,
) {
  return coreRender(extensionPoint, (root, api) => {
    const element = renderCallback(api as ExtensionApi[T]);
    remoteRender(createElement(ExtensionApiContext.Provider, {value: api}, element), root);
  });
}

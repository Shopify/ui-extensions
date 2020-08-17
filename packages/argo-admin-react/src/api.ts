import {render as remoteRender} from '@remote-ui/react';
import {createElement, ReactElement} from 'react';
import {render as coreRender, ExtensionApi, ExtensionPoint} from '@shopify/argo-admin';

import {ExtensionApiContext} from './extension-api/utils';

export type {ShopifyApi} from '@shopify/argo-admin';

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

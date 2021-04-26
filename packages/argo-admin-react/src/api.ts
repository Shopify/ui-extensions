import {RemoteRoot, render as remoteRender} from '@remote-ui/react';
import {createElement, ReactElement} from 'react';
import {extend, ExtensionApi, ExtensionPoint} from '@shopify/argo-admin';

import {ExtensionApiContext} from './extension-api/utils';

export type {ShopifyApi} from '@shopify/argo-admin';

export type RenderCallback<T extends ExtensionPoint> = (
  api: ExtensionApi[T],
) => ReactElement;

export {extend};

export function render<T extends ExtensionPoint>(
  renderCallback: RenderCallback<T>,
) {
  return (root: RemoteRoot, api: ExtensionApi[T]) => {
    const element = renderCallback(api);
    remoteRender(
      createElement(ExtensionApiContext.Provider, {value: api}, element),
      root,
      () => {
        root.mount();
      },
    );
  };
}

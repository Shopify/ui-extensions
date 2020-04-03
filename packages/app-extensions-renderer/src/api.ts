import {ReactElement} from 'react';
import {render as remoteRender} from '@shopify/remote-ui-react';

import {
  CallbackTypeForExtensionPoint,
  DataTypeForExtensionCallback,
  ExtensionPoint,
  ExtensionResult,
} from './extension-points';
import {attachListeners} from './listeners';

export interface ShopifyApi {
  extend<T extends ExtensionPoint>(
    extensionPoint: T,
    callback: CallbackTypeForExtensionPoint<T>,
  ): ExtensionResult;
}

export interface ShopifyGlobal {
  readonly shopify: ShopifyApi;
}

export function extend<T extends ExtensionPoint>(
  extensionPoint: T,
  callback: CallbackTypeForExtensionPoint<T>,
) {
  return ((self as any) as ShopifyGlobal).shopify.extend(extensionPoint, callback);
}

export type RenderCallback<T extends ExtensionPoint> = (
  data: DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>,
) => ReactElement;

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  renderCallback: RenderCallback<T>,
) {
  return extend(extensionPoint, (root, data, setEventListeners) => {
    const element = renderCallback(
      data as DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>,
    );
    remoteRender(attachListeners(element, setEventListeners), root);
  });
}

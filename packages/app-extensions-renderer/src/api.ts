import {ReactElement} from 'react';
import {render as remoteRender} from '@shopify/remote-ui-react';
import {
  ExtensionPoint,
  CallbackTypeForExtensionPoint,
  DataTypeForExtensionCallback,
  ExtensionResult,
} from './extension-points';

export interface ShopifyApi {
  extend<T extends ExtensionPoint>(
    extensionPoint: T,
    callback: CallbackTypeForExtensionPoint<T>,
  ): ExtensionResult;
  fetch?: any;
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
  return extend(extensionPoint, (root, data) => {
    const element = renderCallback(
      data as DataTypeForExtensionCallback<CallbackTypeForExtensionPoint<T>>,
    );
    remoteRender(element, root);
  });
}

import {createElement, ReactElement} from 'react';
import {render as remoteRender} from '@shopify/remote-ui-react';

import {
  CallbackTypeForExtensionPoint,
  ExtractedInputFromRenderExtension,
  ExtensionPoint,
  ExtensionResult,
} from './extension-points';
import {ExtensionInputContext} from './input';

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
  input: ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
) => ReactElement;

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  renderCallback: RenderCallback<T>,
) {
  return extend(extensionPoint, (root, input) => {
    const element = renderCallback(
      input as ExtractedInputFromRenderExtension<CallbackTypeForExtensionPoint<T>>,
    );
    remoteRender(createElement(ExtensionInputContext.Provider, {value: input}, element), root);
  });
}

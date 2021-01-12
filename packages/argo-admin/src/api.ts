import {
  ExtensionPoint,
  ExtensionPointCallback,
  ExtensionApi,
  ExtensionResult,
} from './extension-points';

export interface ShopifyApi {
  extend<T extends ExtensionPoint>(
    extensionPoint: T,
    callback: ExtensionPointCallback[T],
  ): ExtensionResult;
}

export interface ShopifyGlobal {
  readonly shopify: ShopifyApi;
}

export function extend<T extends ExtensionPoint>(
  extensionPoint: T,
  callback: ExtensionPointCallback[T],
) {
  return ((self as any) as ShopifyGlobal).shopify.extend(extensionPoint, callback);
}

import {
  ExtensionPointCallback,
  ExtensionApi,
  ExtensionPoint,
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

export type StandardApi<T extends ExtensionPoint> = Omit<
  ExtensionApi[T],
  'locale' | 'layoutApi' | 'sessionToken'
>;

export interface RenderExtensionComponentProps<T extends ExtensionPoint> {
  extensionPoint: T;
  script?: string | URL;
  api?: StandardApi<T>;
  components?: {[key: string]: any};
}

export function render<T extends ExtensionPoint>(
  extensionPoint: T,
  callback: ExtensionPointCallback[T],
) {
  return ((self as any) as ShopifyGlobal).shopify.extend(extensionPoint, callback);
}

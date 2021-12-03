import { ExtensionPoint, ExtensionPointCallback, ExtensionResult } from './extension-points';
export interface ShopifyApi {
    extend<T extends ExtensionPoint>(extensionPoint: T, callback: ExtensionPointCallback[T]): ExtensionResult;
}
export interface ShopifyGlobal {
    readonly shopify: ShopifyApi;
}
export declare function extend<T extends ExtensionPoint>(extensionPoint: T, callback: ExtensionPointCallback[T]): ExtensionResult;
//# sourceMappingURL=api.d.ts.map
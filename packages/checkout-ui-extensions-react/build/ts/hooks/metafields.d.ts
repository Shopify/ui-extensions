import type { RenderExtensionPoint } from '@shopify/checkout-ui-extensions';
interface MetafieldsFilters {
    namespace: string;
    key?: string;
}
/**
 * Returns the current array of `metafields` applied to the checkout.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
export declare function useMetafields<ID extends RenderExtensionPoint = RenderExtensionPoint>(filters?: MetafieldsFilters): import("@shopify/checkout-ui-extensions").Metafield[];
/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */
export declare function useApplyMetafieldsChange<ID extends RenderExtensionPoint = RenderExtensionPoint>(): ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>);
export {};
//# sourceMappingURL=metafields.d.ts.map
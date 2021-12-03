import type { RenderExtensionPoint } from '@shopify/checkout-ui-extensions';
/**
 * Returns the current array of `privateMetafields` applied to the checkout.
 */
export declare function usePrivateMetafields<ID extends RenderExtensionPoint = RenderExtensionPoint>(): import("@shopify/checkout-ui-extensions").Metafield[];
/**
 * Returns a function to mutate the `privateMetafields` property of the checkout.
 */
export declare function useApplyPrivateMetafieldsChange<ID extends RenderExtensionPoint = RenderExtensionPoint>(): ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>) | ((change: import("@shopify/checkout-ui-extensions").MetafieldChange) => Promise<import("@shopify/checkout-ui-extensions").MetafieldChangeResult>);
//# sourceMappingURL=private-metafields.d.ts.map
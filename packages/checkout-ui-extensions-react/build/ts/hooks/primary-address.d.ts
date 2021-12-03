import type { RenderExtensionPoint } from '@shopify/checkout-ui-extensions';
/**
 * Returns either the proposed `shippingAddress`, if it is required, or
 * the proposed `billingAddress` applied to the checkout.
 */
export declare function usePrimaryAddress<ID extends RenderExtensionPoint = RenderExtensionPoint>(): import("@shopify/checkout-ui-extensions").Address | undefined;
//# sourceMappingURL=primary-address.d.ts.map
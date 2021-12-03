import type { RenderExtensionPoint, Interceptor } from '@shopify/checkout-ui-extensions';
/**
 * Returns the `buyerJourney` details on buyer progression in checkout
 */
export declare function useBuyerJourney<ID extends RenderExtensionPoint = RenderExtensionPoint>(): {
    intercept(interceptor: Interceptor): Promise<() => void>;
};
/**
 * Takes a function that allows you to block the buyer’s progress through the checkout
 * by returning an object with `{behavior: 'block'}`.
 * If you block, you are expected to also update some part of your UI to reflect
 * the reason why navigation was blocked.
 */
export declare function useBuyerJourneyIntercept<ID extends RenderExtensionPoint = RenderExtensionPoint>(interceptor: Interceptor): void;
//# sourceMappingURL=buyer-journey.d.ts.map
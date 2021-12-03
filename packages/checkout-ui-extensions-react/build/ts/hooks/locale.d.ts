import { RenderExtensionPoint, ApiForRenderExtension } from '@shopify/checkout-ui-extensions';
/**
 * Returns the current locale of the checkout, and automatically re-renders
 * your component if the locale changes.
 */
export declare function useLocale<ID extends RenderExtensionPoint = RenderExtensionPoint>(): ApiForRenderExtension<ID>['locale']['current'];
//# sourceMappingURL=locale.d.ts.map
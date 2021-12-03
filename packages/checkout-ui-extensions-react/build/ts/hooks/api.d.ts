import { RenderExtensionPoint, ApiForRenderExtension } from '@shopify/checkout-ui-extensions';
/**
 * Gives you access to the full API object that was passed in to your
 * extension when it was created.
 */
export declare function useExtensionApi<ID extends RenderExtensionPoint = RenderExtensionPoint>(): ApiForRenderExtension<ID>;
//# sourceMappingURL=api.d.ts.map
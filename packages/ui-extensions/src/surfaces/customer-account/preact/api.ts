import {
  RenderExtensionTarget,
  ApiForRenderExtension,
} from '../extension-targets';

import {CustomerAccountUIExtensionError} from './errors';

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 */
export function useApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForRenderExtension<Target> {
  const api = (globalThis as any)?.shopify as ApiForRenderExtension<Target>;

  if (api == null) {
    throw new CustomerAccountUIExtensionError(
      'You can only call this hook when running as a customer account UI extension.',
    );
  }

  return api as ApiForRenderExtension<Target>;
}

/**
 * Returns the full API object that was passed in to your extension when it was created.
 * Depending on the extension target, this object can contain different properties.
 *
 * > Caution: This is deprecated, use `useApi` instead.
 *
 * @deprecated This is deprecated, use `useApi` instead.
 */
export function useExtensionApi<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForRenderExtension<Target> {
  return useApi();
}

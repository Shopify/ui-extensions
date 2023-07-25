import type {
  Extension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtension<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Extension<Target> {
  return useApi<Target>().extension as Extension<Target>;
}

/**
 * Returns the metadata about the extension.
 *
 * @deprecated Use `useExtension()` instead.
 */
export const useExtensionData = useExtension;

import type {
  Extension,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtension<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Extension {
  return useApi<ID>().extension;
}

/**
 * Returns the metadata about the extension.
 *
 * @deprecated Use `useExtension()` instead.
 */
export const useExtensionData = useExtension;

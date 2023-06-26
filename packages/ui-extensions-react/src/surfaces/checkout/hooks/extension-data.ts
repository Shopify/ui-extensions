import type {
  Extension,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Extension {
  return useApi<ID>().extension;
}

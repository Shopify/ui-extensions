import type {
  Extension,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Extension {
  return useExtensionApi<ID>().extension;
}

import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns the meta data about the extension.
 */
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().extension;
}

import type {RenderExtensionPoint} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useApi<ID>().extension;
}

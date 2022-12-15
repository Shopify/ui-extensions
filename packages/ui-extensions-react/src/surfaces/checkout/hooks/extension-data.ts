import type {RenderExtensionPoint} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtensionData<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useExtensionApi<ID>().extension;
}

import type {RenderExtensionPoint} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension point.
 */
export function useStorage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useExtensionApi<ID>().storage;
}

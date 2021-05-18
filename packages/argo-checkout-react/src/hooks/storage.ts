import type {RenderExtensionPoint} from '@shopify/argo-checkout';

import {useExtensionApi} from './api';

/**
 * Returns the interface for the key / value storage for this extension point.
 */
export function useStorage<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().storage;
}

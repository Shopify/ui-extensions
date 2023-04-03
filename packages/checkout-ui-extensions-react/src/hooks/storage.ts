import type {
  RenderExtensionPoint,
  Storage,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension point.
 */
export function useStorage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Storage {
  return useExtensionApi<ID>().storage;
}

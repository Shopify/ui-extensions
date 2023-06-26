import type {
  RenderExtensionPoint,
  Storage,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension point.
 */
export function useStorage<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Storage {
  return useApi<ID>().storage;
}

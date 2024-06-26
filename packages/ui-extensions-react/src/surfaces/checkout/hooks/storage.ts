import type {
  RenderExtensionTarget,
  Storage,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension.
 * Uses `localStorage` and should persist across the buyer's current checkout session.
 * However, data persistence isn't guaranteed and storage is reset when the buyer starts a new checkout.
 *
 * Data is shared across all activated extension targets of this extension. In versions `<=2023-07`,
 * each activated extension target had its own storage.
 */
export function useStorage<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Storage {
  return useApi<Target>().storage;
}

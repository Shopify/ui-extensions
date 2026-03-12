import type {
  SubscribableSignalLike,
  AppMetafieldEntry,
} from '@shopify/ui-extensions/checkout';

import type {AnyExtensionTarget, ApiForTarget} from '../targets';
import {createSubscribableSignalLike} from '../mocks/signals';

/**
 * Creates a mock `SubscribableSignalLike<AppMetafieldEntry[]>` for use
 * as the `appMetafields` override in `mockGlobalShopify`.
 */
export function createAppMetafields(
  entries: AppMetafieldEntry[],
): SubscribableSignalLike<AppMetafieldEntry[]> {
  return createSubscribableSignalLike(entries);
}

/**
 * Creates a mock API for checkout extension targets.
 */
export function createMockCheckoutTargetApi<T extends AnyExtensionTarget>(
  _target: T,
): Partial<ApiForTarget<T>> {
  return {
    appMetafields: createSubscribableSignalLike([]),
    applyMetafieldChange: async () => ({type: 'success' as const}),
  } as unknown as Partial<ApiForTarget<T>>;
}

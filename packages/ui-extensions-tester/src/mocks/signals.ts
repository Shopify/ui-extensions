import type {SubscribableSignalLike} from '@shopify/ui-extensions/checkout';

/**
 * Creates a mock `SubscribableSignalLike` that wraps a static value.
 * The `subscribe` callback is never invoked since test values are static.
 */
export function createSubscribableSignalLike<T>(
  value: T,
): SubscribableSignalLike<T> {
  return {
    value,
    current: value,
    subscribe: () => () => {},
    destroy: async () => {},
  };
}

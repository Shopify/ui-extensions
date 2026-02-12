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

/**
 * A minimal read-only signal for surfaces (like POS) that use
 * `ReadonlySignalLike` instead of `SubscribableSignalLike`.
 */
export interface MockReadonlySignalLike<T> {
  readonly value: T;
  subscribe(fn: (value: T) => void): () => void;
}

/**
 * Creates a mock `ReadonlySignalLike` that wraps a static value.
 */
export function createReadonlySignalLike<T>(
  value: T,
): MockReadonlySignalLike<T> {
  return {
    value,
    subscribe: () => () => {},
  };
}

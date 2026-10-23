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

/**
 * Creates a mock signal that notifies subscribers when its `value` is replaced
 * through the test harness.
 */
export function createReactiveReadonlySignalLike<T>(
  initialValue: T,
): MockReadonlySignalLike<T> {
  let value = initialValue;
  const listeners = new Set<(value: T) => void>();

  return {
    get value() {
      return value;
    },
    set value(nextValue: T) {
      if (Object.is(value, nextValue)) return;
      value = nextValue;
      for (const listener of listeners) listener(value);
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
  };
}

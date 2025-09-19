import {useEffect, useState} from 'preact/hooks';

import type {SubscribableSignalLike} from '../shared';

type Subscriber<T> = Parameters<SubscribableSignalLike<T>['subscribe']>[0];

/**
 * Subscribes to the special wrapper type that all "changeable" values in the
 * checkout use. This hook extracts the most recent value from that object,
 * and subscribes to update the value when changes occur in the checkout.
 *
 * > Note:
 * > As of version 2025-10, you no longer need this hook. When you access `.value`
 * > (instead of `.current`) on subscribable properties, Preact will automatically
 * > re-render as `.value` changes.
 */
export function useSubscription<Value>(
  subscription: SubscribableSignalLike<Value>,
): Value {
  const [, setValue] = useState(subscription.value);

  useEffect(() => {
    let didUnsubscribe = false;

    const checkForUpdates: Subscriber<Value> = (newValue) => {
      if (didUnsubscribe) {
        return;
      }

      setValue(newValue);
    };

    const unsubscribe = subscription.subscribe(checkForUpdates);

    // Because we're subscribing in a passive effect,
    // it's possible for an update to occur between render and the effect handler.
    // Check for this and schedule an update if work has occurred.
    checkForUpdates(subscription.value);

    return () => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [subscription]);

  return subscription.value;
}

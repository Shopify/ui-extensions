import {useEffect, useState} from 'react';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

type Subscriber<T> = Parameters<StatefulRemoteSubscribable<T>['subscribe']>[0];

/**
 * Subscribes to the special wrapper type that all “changeable” values in
 * Customer Account use. This hook extracts the most recent value from that
 * object, and subscribes to update the value when changes occur in Customer
 * Account.
 */
export function useSubscription<T>(
  subscription: StatefulRemoteSubscribable<T>,
): T {
  const [value, setValue] = useState(subscription.current);

  useEffect(() => {
    let didUnsubscribe = false;

    const checkForUpdates: Subscriber<T> = (newValue) => {
      if (didUnsubscribe) {
        return;
      }

      setValue(newValue);
    };

    const unsubscribe = subscription.subscribe(checkForUpdates);

    // Because we're subscribing in a passive effect, it's possible for an
    // update to occur between render and the effect handler. Check for this
    // and schedule an update if work has occurred.
    checkForUpdates(subscription.current);

    return () => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [subscription]);

  return value;
}

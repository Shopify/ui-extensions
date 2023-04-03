import type {StatefulRemoteSubscribable} from '@shopify/retail-ui-extensions/src';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions';
import {useExtensionApi} from '../utils';
import {useEffect, useRef, useState} from 'react';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableScanner` call.
 * Use `destroyStatefulSubscribableScanner` to destroy it and all of the subscribers.
 */
let statefulSubscribable: StatefulRemoteSubscribable<string> | undefined;

/**
 * Verifies that the API has a Scanner in it.
 */
const isScannerApi = (api: any): boolean => {
  return 'scanner' in api;
};

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableScanner` function to create a component state.
 * @returns this hook returns the latest Scanner state which re-renders on change.
 */
export function useScannerSubscription() {
  const statefulSubscribableScanner = useStatefulSubscribableScanner();
  const [scanner, setScanner] = useState<string>(
    statefulSubscribableScanner.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableScanner.subscribe((scanner: string) => {
        setScanner(scanner);
      });
    }
  }, [statefulSubscribableScanner]);

  return scanner;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple Scanner subscriptions.
 * @returns StatefulRemoteSubscribable object with a Scanner in it.
 */
export function useStatefulSubscribableScanner() {
  const api = useExtensionApi();
  if (!isScannerApi(api)) {
    throw new Error('No scanner api found');
  }
  const {subscribable} = api.scanner;

  if (!statefulSubscribable) {
    statefulSubscribable = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribable;
}
/**
 * A function destroying the subscriptions `useStatefulSubscribableScanner` has.
 */
export function destroyStatefulSubscribableScanner() {
  statefulSubscribable?.destroy();
  statefulSubscribable = undefined;
}

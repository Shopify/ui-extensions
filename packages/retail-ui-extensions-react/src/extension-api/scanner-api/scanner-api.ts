import type {
  ScannerSubscriptionResult,
  StatefulRemoteSubscribable,
} from '@shopify/retail-ui-extensions';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions';
import {useEffect, useRef, useState} from 'react';

import {useExtensionApi} from '../utils';

export type {
  SupportedSource,
  ScannerSubscriptionResult,
  ScannerApiContent,
  ScannerApi,
} from '@shopify/retail-ui-extensions';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableScanner` call.
 * Use `destroyStatefulSubscribableCart` to destroy it and all of the subscribers.
 */
let statefulSubscribable:
  | StatefulRemoteSubscribable<ScannerSubscriptionResult>
  | undefined;

const isScannerApi = (api: any): boolean => {
  return 'scanner' in api;
};

/**
 * A hook utilizing `useState` and the `useStatefulSubscribableScanner` function to create a component state.
 * @returns this hook returns the latest scan result state which re-renders on change.
 */
export function useScannerSubscription() {
  const statefulSubscribableScanner = useStatefulSubscribableScanner();
  const [scanResult, setScanResult] = useState<ScannerSubscriptionResult>(
    statefulSubscribableScanner.current,
  );

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (!unsubscribeRef.current) {
      statefulSubscribableScanner.subscribe(
        (scanResult: ScannerSubscriptionResult) => {
          setScanResult(scanResult);
        },
      );
    }
  }, [statefulSubscribableScanner]);

  return scanResult;
}

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple scanner subscriptions.
 * @returns StatefulRemoteSubscribable object with a scan result in it.
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

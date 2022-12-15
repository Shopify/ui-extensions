import {useEffect, useRef} from 'react';
import type {
  RenderExtensionPoint,
  Interceptor,
} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';

/**
 * Returns the `buyerJourney` details on buyer progression in checkout.
 */
export function useBuyerJourney<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useExtensionApi<ID>().buyerJourney;
}

/**
 * Returns a function to intercept and block navigation in checkout.
 */
export function useBuyerJourneyIntercept<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(interceptor: Interceptor) {
  const buyerJourney = useBuyerJourney<ID>();
  const interceptorRef = useRef(interceptor);
  interceptorRef.current = interceptor;

  useEffect(() => {
    const teardownPromise = buyerJourney.intercept((interceptorProps) =>
      interceptorRef.current(interceptorProps),
    );

    return () => {
      teardownPromise.then((teardown) => teardown()).catch(() => {});
    };
  }, [buyerJourney]);
}

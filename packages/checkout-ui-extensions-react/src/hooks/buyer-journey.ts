import {useEffect, useRef} from 'react';
import type {
  RenderExtensionPoint,
  Interceptor,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';

/**
 * Returns the `buyerJourney` details on buyer progression in checkout
 */
export function useBuyerJourney<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>() {
  return useExtensionApi<ID>().buyerJourney;
}

/**
 * Buyer journey intercept hook
 */
export function useBuyerJourneyIntercept<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>(interceptor: Interceptor) {
  const buyerJourney = useBuyerJourney<ID>();
  const interceptorRef = useRef(interceptor);
  interceptorRef.current = interceptor;

  useEffect(() => {
    const teardownPromise = buyerJourney.intercept(() =>
      interceptorRef.current(),
    );

    return () => {
      teardownPromise.then((teardown) => teardown()).catch(() => {});
    };
  }, [buyerJourney]);
}

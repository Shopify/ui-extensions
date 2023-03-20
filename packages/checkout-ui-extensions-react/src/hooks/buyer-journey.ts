import {useEffect, useRef} from 'react';
import type {
  RenderExtensionPoint,
  Interceptor,
  BuyerJourney,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the `buyerJourney` details on buyer progression in checkout.
 */
export function useBuyerJourney<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): BuyerJourney {
  return useExtensionApi<ID>().buyerJourney;
}

/**
 * Returns true if the buyer completed submitting their order.
 *
 * For example, when viewing the order status page after submitting payment, the buyer will have completed their order.
 */
export function useBuyerJourneyCompleted<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): boolean {
  const buyerJourney = useExtensionApi<ID>().buyerJourney;
  const buyerJourneyCompleted = useSubscription(buyerJourney.completed);

  return buyerJourneyCompleted;
}

/**
 * Returns a function to intercept and block navigation in checkout.
 */
export function useBuyerJourneyIntercept<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(interceptor: Interceptor): void {
  const buyerJourney = useExtensionApi<ID>().buyerJourney;
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

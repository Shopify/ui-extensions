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
 * Installs a function for intercepting and preventing progress on checkout.
 *
 * To block checkout progress, you must set the [block_progress](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#block-progress)
 * capability in your extension's configuration.
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

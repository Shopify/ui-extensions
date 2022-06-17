import {useEffect, useRef} from 'react';
import type {
  RenderExtensionPoint,
  Interceptor,
} from '@shopify/checkout-ui-extensions';

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
 * Takes a function that allows you to block the buyer’s progress through the checkout
 * by returning an object with `{behavior: 'block', reason: InvalidResultReason.UnknownReason}`.
 * If you block, you should also update some part of your UI to reflect
 * the reason why navigation was blocked.
 */
export function useBuyerJourneyIntercept<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
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

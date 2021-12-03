import { useEffect, useRef } from 'react';
import { useExtensionApi } from './api';
/**
 * Returns the `buyerJourney` details on buyer progression in checkout
 */

export function useBuyerJourney() {
  return useExtensionApi().buyerJourney;
}
/**
 * Takes a function that allows you to block the buyer’s progress through the checkout
 * by returning an object with `{behavior: 'block'}`.
 * If you block, you are expected to also update some part of your UI to reflect
 * the reason why navigation was blocked.
 */

export function useBuyerJourneyIntercept(interceptor) {
  var buyerJourney = useBuyerJourney();
  var interceptorRef = useRef(interceptor);
  interceptorRef.current = interceptor;
  useEffect(function () {
    var teardownPromise = buyerJourney.intercept(function () {
      return interceptorRef.current();
    });
    return function () {
      teardownPromise.then(function (teardown) {
        return teardown();
      })["catch"](function () {});
    };
  }, [buyerJourney]);
}
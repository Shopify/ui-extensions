"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBuyerJourney = useBuyerJourney;
exports.useBuyerJourneyIntercept = useBuyerJourneyIntercept;

var _react = require("react");

var _api = require("./api");

/**
 * Returns the `buyerJourney` details on buyer progression in checkout
 */
function useBuyerJourney() {
  return (0, _api.useExtensionApi)().buyerJourney;
}
/**
 * Takes a function that allows you to block the buyer’s progress through the checkout
 * by returning an object with `{behavior: 'block'}`.
 * If you block, you are expected to also update some part of your UI to reflect
 * the reason why navigation was blocked.
 */


function useBuyerJourneyIntercept(interceptor) {
  const buyerJourney = useBuyerJourney();
  const interceptorRef = (0, _react.useRef)(interceptor);
  interceptorRef.current = interceptor;
  (0, _react.useEffect)(() => {
    const teardownPromise = buyerJourney.intercept(() => interceptorRef.current());
    return () => {
      teardownPromise.then(teardown => teardown()).catch(() => {});
    };
  }, [buyerJourney]);
}
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
  var buyerJourney = useBuyerJourney();
  var interceptorRef = (0, _react.useRef)(interceptor);
  interceptorRef.current = interceptor;
  (0, _react.useEffect)(function () {
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
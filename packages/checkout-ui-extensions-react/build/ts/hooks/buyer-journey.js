"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBuyerJourneyIntercept = exports.useBuyerJourney = void 0;
const react_1 = require("react");
const api_1 = require("./api");
/**
 * Returns the `buyerJourney` details on buyer progression in checkout
 */
function useBuyerJourney() {
    return api_1.useExtensionApi().buyerJourney;
}
exports.useBuyerJourney = useBuyerJourney;
/**
 * Takes a function that allows you to block the buyer’s progress through the checkout
 * by returning an object with `{behavior: 'block'}`.
 * If you block, you are expected to also update some part of your UI to reflect
 * the reason why navigation was blocked.
 */
function useBuyerJourneyIntercept(interceptor) {
    const buyerJourney = useBuyerJourney();
    const interceptorRef = react_1.useRef(interceptor);
    interceptorRef.current = interceptor;
    react_1.useEffect(() => {
        const teardownPromise = buyerJourney.intercept(() => interceptorRef.current());
        return () => {
            teardownPromise.then((teardown) => teardown()).catch(() => { });
        };
    }, [buyerJourney]);
}
exports.useBuyerJourneyIntercept = useBuyerJourneyIntercept;

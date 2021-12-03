"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscription = void 0;
const react_1 = require("react");
/**
 * Subscribes to the special wrapper type that all “changeable” values in the
 * checkout use. This hook extracts the most recent value from that object,
 * and subscribes to update the value when changes occur in the checkout. You
 * generally shouldn’t need to use this directly, as there are dedicated hooks
 * for accessing the current value of each individual resource in the checkout.
 */
function useSubscription(subscription) {
    const [, setValue] = react_1.useState(subscription.current);
    react_1.useEffect(() => {
        let didUnsubscribe = false;
        const checkForUpdates = (newValue) => {
            if (didUnsubscribe) {
                return;
            }
            setValue(newValue);
        };
        const unsubscribe = subscription.subscribe(checkForUpdates);
        // Because we're subscribing in a passive effect,
        // it's possible that an update has occurred between render and our effect handler.
        // Check for this and schedule an update if work has occurred.
        checkForUpdates(subscription.current);
        return () => {
            didUnsubscribe = true;
            unsubscribe();
        };
    }, [subscription]);
    return subscription.current;
}
exports.useSubscription = useSubscription;

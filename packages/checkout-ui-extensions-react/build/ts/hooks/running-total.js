"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRunningTotal = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the running total calculated at the current step.
 */
function useRunningTotal() {
    return subscription_1.useSubscription(api_1.useExtensionApi().runningTotal);
}
exports.useRunningTotal = useRunningTotal;

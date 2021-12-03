"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePrimaryAddress = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns either the proposed `shippingAddress`, if it is required, or
 * the proposed `billingAddress` applied to the checkout.
 */
function usePrimaryAddress() {
    return subscription_1.useSubscription(api_1.useExtensionApi().primaryAddress);
}
exports.usePrimaryAddress = usePrimaryAddress;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBillingAddress = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */
function useBillingAddress() {
    return subscription_1.useSubscription(api_1.useExtensionApi().billingAddress);
}
exports.useBillingAddress = useBillingAddress;

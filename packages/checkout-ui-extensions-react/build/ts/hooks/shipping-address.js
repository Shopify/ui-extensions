"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShippingAddress = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
function useShippingAddress() {
    return subscription_1.useSubscription(api_1.useExtensionApi().shippingAddress);
}
exports.useShippingAddress = useShippingAddress;

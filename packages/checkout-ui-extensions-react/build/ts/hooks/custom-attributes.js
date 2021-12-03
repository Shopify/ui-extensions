"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomAttributes = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the proposed `custom attributes` applied to the checkout.
 */
function useCustomAttributes() {
    return subscription_1.useSubscription(api_1.useExtensionApi().customAttributes);
}
exports.useCustomAttributes = useCustomAttributes;

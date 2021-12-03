"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomerAccount = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the customer account associated to the buyer.
 */
function useCustomerAccount() {
    return subscription_1.useSubscription(api_1.useExtensionApi().customerAccount);
}
exports.useCustomerAccount = useCustomerAccount;

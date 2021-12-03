"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCustomerAccount = useCustomerAccount;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the customer account associated to the buyer.
 */
function useCustomerAccount() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().customerAccount);
}
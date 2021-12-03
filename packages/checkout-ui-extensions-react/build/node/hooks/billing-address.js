"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBillingAddress = useBillingAddress;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */
function useBillingAddress() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().billingAddress);
}
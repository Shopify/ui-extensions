"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrimaryAddress = usePrimaryAddress;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns either the proposed `shippingAddress`, if it is required, or
 * the proposed `billingAddress` applied to the checkout.
 */
function usePrimaryAddress() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().primaryAddress);
}
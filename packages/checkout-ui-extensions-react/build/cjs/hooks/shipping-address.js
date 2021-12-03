"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShippingAddress = useShippingAddress;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
function useShippingAddress() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().shippingAddress);
}
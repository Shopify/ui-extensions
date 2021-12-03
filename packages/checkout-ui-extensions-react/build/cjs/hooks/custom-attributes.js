"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCustomAttributes = useCustomAttributes;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the proposed `custom attributes` applied to the checkout.
 */
function useCustomAttributes() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().customAttributes);
}
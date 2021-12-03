"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePrivateMetafields = usePrivateMetafields;
exports.useApplyPrivateMetafieldsChange = useApplyPrivateMetafieldsChange;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the current array of `privateMetafields` applied to the checkout.
 */
function usePrivateMetafields() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().privateMetafields);
}
/**
 * Returns a function to mutate the `privateMetafields` property of the checkout.
 */


function useApplyPrivateMetafieldsChange() {
  return (0, _api.useExtensionApi)().applyPrivateMetafieldChange;
}
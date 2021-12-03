"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLineItems = useLineItems;
exports.useApplyLineItemsChange = useApplyLineItemsChange;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
function useLineItems() {
  const {
    lineItems
  } = (0, _api.useExtensionApi)();
  return (0, _subscription.useSubscription)(lineItems);
}

function useApplyLineItemsChange() {
  return (0, _api.useExtensionApi)().applyLineItemsChange;
}
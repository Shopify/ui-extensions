"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplyLineItemsChange = exports.useLineItems = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
function useLineItems() {
    const { lineItems } = api_1.useExtensionApi();
    return subscription_1.useSubscription(lineItems);
}
exports.useLineItems = useLineItems;
function useApplyLineItemsChange() {
    return api_1.useExtensionApi().applyLineItemsChange;
}
exports.useApplyLineItemsChange = useApplyLineItemsChange;

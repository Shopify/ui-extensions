"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplyPrivateMetafieldsChange = exports.usePrivateMetafields = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the current array of `privateMetafields` applied to the checkout.
 */
function usePrivateMetafields() {
    return subscription_1.useSubscription(api_1.useExtensionApi().privateMetafields);
}
exports.usePrivateMetafields = usePrivateMetafields;
/**
 * Returns a function to mutate the `privateMetafields` property of the checkout.
 */
function useApplyPrivateMetafieldsChange() {
    return api_1.useExtensionApi().applyPrivateMetafieldChange;
}
exports.useApplyPrivateMetafieldsChange = useApplyPrivateMetafieldsChange;

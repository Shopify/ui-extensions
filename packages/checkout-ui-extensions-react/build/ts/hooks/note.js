"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNote = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the proposed `note` applied to the checkout.
 */
function useNote() {
    return subscription_1.useSubscription(api_1.useExtensionApi().note);
}
exports.useNote = useNote;

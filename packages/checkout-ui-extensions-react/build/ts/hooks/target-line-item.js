"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTargetLineItem = void 0;
const api_1 = require("./api");
const subscription_1 = require("./subscription");
class ExtensionHasNoTargetError extends Error {
    constructor(extensionPoint) {
        super(`Cannot call 'useTargetLineItem()' on extensionPoint '${extensionPoint}'. Property 'target' is not found on api.`);
        this.name = 'ExtensionHasNoTargetError';
    }
}
/**
 * Returns the target line item.
 */
function useTargetLineItem() {
    const api = api_1.useExtensionApi();
    if (!api.target) {
        throw new ExtensionHasNoTargetError(api.extensionPoint);
    }
    return subscription_1.useSubscription(api.target);
}
exports.useTargetLineItem = useTargetLineItem;

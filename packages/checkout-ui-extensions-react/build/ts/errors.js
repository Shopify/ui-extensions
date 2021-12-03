"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutUIExtensionError = void 0;
class CheckoutUIExtensionError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'CheckoutUIExtensionError';
    }
}
exports.CheckoutUIExtensionError = CheckoutUIExtensionError;

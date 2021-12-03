"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExtensionApi = void 0;
const react_1 = require("react");
const errors_1 = require("../errors");
const context_1 = require("../context");
/**
 * Gives you access to the full API object that was passed in to your
 * extension when it was created.
 */
function useExtensionApi() {
    const api = react_1.useContext(context_1.ExtensionApiContext);
    if (api == null) {
        throw new errors_1.CheckoutUIExtensionError('You can only call this hook when running as a UI extension.');
    }
    return api;
}
exports.useExtensionApi = useExtensionApi;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStorage = void 0;
const api_1 = require("./api");
/**
 * Returns the interface for the key / value storage for this extension point.
 */
function useStorage() {
    return api_1.useExtensionApi().storage;
}
exports.useStorage = useStorage;

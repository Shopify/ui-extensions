"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExtensionData = void 0;
const api_1 = require("./api");
/**
 * Returns the metadata about the extension.
 */
function useExtensionData() {
    return api_1.useExtensionApi().extension;
}
exports.useExtensionData = useExtensionData;

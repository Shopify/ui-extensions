"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useExtensionInput = void 0;
const react_1 = require("react");
const context_1 = require("../context");
function useExtensionInput() {
    const input = react_1.useContext(context_1.ExtensionInputContext);
    if (input == null) {
        throw new Error('You can only call this hook when running as a UI extension.');
    }
    return input;
}
exports.useExtensionInput = useExtensionInput;

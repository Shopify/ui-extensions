"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplySignedChange = void 0;
const api_1 = require("./api");
function useApplySignedChange() {
    return api_1.useExtensionApi().applySignedChange;
}
exports.useApplySignedChange = useApplySignedChange;

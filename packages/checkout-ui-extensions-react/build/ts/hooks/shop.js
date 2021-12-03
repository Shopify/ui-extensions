"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useShop = void 0;
const api_1 = require("./api");
/**
 * Returns the shop where the checkout is taking place.
 */
function useShop() {
    return api_1.useExtensionApi().shop;
}
exports.useShop = useShop;

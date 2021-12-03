"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useShop = useShop;

var _api = require("./api");

/**
 * Returns the shop where the checkout is taking place.
 */
function useShop() {
  return (0, _api.useExtensionApi)().shop;
}
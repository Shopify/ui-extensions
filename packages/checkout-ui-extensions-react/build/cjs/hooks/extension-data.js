"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExtensionData = useExtensionData;

var _api = require("./api");

/**
 * Returns the metadata about the extension.
 */
function useExtensionData() {
  return (0, _api.useExtensionApi)().extension;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStorage = useStorage;

var _api = require("./api");

/**
 * Returns the interface for the key / value storage for this extension point.
 */
function useStorage() {
  return (0, _api.useExtensionApi)().storage;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExtensionApi = useExtensionApi;

var _react = require("react");

var _errors = require("../errors");

var _context = require("../context");

/**
 * Gives you access to the full API object that was passed in to your
 * extension when it was created.
 */
function useExtensionApi() {
  const api = (0, _react.useContext)(_context.ExtensionApiContext);

  if (api == null) {
    throw new _errors.CheckoutUIExtensionError('You can only call this hook when running as a UI extension.');
  }

  return api;
}
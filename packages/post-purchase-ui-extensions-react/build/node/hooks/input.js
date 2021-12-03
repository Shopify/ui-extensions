"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useExtensionInput = useExtensionInput;

var _react = require("react");

var _context = require("../context");

function useExtensionInput() {
  const input = (0, _react.useContext)(_context.ExtensionInputContext);

  if (input == null) {
    throw new Error('You can only call this hook when running as a UI extension.');
  }

  return input;
}
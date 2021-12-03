"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutUIExtensionError = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CheckoutUIExtensionError extends Error {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "name", 'CheckoutUIExtensionError');
  }

}

exports.CheckoutUIExtensionError = CheckoutUIExtensionError;
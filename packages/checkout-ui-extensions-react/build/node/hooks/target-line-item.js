"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTargetLineItem = useTargetLineItem;

var _api = require("./api");

var _subscription = require("./subscription");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ExtensionHasNoTargetError extends Error {
  constructor(extensionPoint) {
    super(`Cannot call 'useTargetLineItem()' on extensionPoint '${extensionPoint}'. Property 'target' is not found on api.`);

    _defineProperty(this, "name", 'ExtensionHasNoTargetError');
  }

}
/**
 * Returns the target line item.
 */


function useTargetLineItem() {
  const api = (0, _api.useExtensionApi)();

  if (!api.target) {
    throw new ExtensionHasNoTargetError(api.extensionPoint);
  }

  return (0, _subscription.useSubscription)(api.target);
}
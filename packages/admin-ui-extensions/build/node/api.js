"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;

function extend(extensionPoint, callback) {
  return self.shopify.extend(extensionPoint, callback);
}
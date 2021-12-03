"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = void 0;

/**
 * The most important API to a UI extension is `shopify`,
 * an object that is globally available.
 * This object has a single method, extend. extend takes two arguments:
 * the name of an available extension point, and a function to call when Shopify
 * is ready to run the extension point.
 */
var extend = function extend() {
  var _shopify;

  return (_shopify = self.shopify).extend.apply(_shopify, arguments);
};

exports.extend = extend;
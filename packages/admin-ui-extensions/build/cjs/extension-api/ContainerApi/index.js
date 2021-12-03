"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isContainerApi = isContainerApi;

/**
 * Each extension point provides a container API with methods the extension can use to communicate with Shopify Admin.
 */
function isContainerApi(api) {
  return 'container' in api;
}
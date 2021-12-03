"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isApiTokenApi = isApiTokenApi;

/**
 * Get a fresh api token for communication with Shopify Admin API
 */
function isApiTokenApi(api) {
  return 'apiToken' in api;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSessionTokenApi = isSessionTokenApi;

/**
 * Get a fresh session token for communication with your app's backend service.
 * Calls to Shopify APIs must be made by your app’s backend service.
 */
function isSessionTokenApi(api) {
  return 'sessionToken' in api;
}
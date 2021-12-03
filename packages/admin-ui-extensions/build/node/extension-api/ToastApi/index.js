"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isToastApi = isToastApi;

/**
 * The toast component is a non-disruptive message that appears at the bottom of the interface to provide quick, at-a-glance feedback on the outcome of an action.
 */
function isToastApi(api) {
  return 'toast' in api;
}
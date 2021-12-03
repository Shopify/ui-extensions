"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRunningTotal = useRunningTotal;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the running total calculated at the current step.
 */
function useRunningTotal() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().runningTotal);
}
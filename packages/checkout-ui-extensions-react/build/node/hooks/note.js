"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNote = useNote;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the proposed `note` applied to the checkout.
 */
function useNote() {
  return (0, _subscription.useSubscription)((0, _api.useExtensionApi)().note);
}
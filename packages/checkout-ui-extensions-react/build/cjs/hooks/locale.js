"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLocale = useLocale;

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the current locale of the checkout, and automatically re-renders
 * your component if the locale changes.
 */
function useLocale() {
  var _useExtensionApi = (0, _api.useExtensionApi)(),
      locale = _useExtensionApi.locale;

  return (0, _subscription.useSubscription)(locale);
}
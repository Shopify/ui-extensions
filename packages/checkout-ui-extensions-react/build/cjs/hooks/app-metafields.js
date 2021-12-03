"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAppMetafields = useAppMetafields;

var _react = require("react");

var _errors = require("../errors");

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the metafields configured via extension.config.yml.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
function useAppMetafields() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var appMetafields = (0, _subscription.useSubscription)((0, _api.useExtensionApi)().appMetafields);
  return (0, _react.useMemo)(function () {
    if (filters.key && !filters.namespace) {
      throw new _errors.CheckoutUIExtensionError('You must pass in a namespace with a key');
    }

    var filterKeys = Object.keys(filters);

    if (filterKeys.length) {
      return appMetafields.filter(function (app) {
        return filterKeys.every(function (key) {
          if (key === 'id' || key === 'type') {
            return app.target[key] === filters[key];
          }

          return app.metafield[key] === filters[key];
        });
      });
    }

    return appMetafields;
  }, [filters, appMetafields]);
}
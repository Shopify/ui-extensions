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
function useAppMetafields(filters = {}) {
  const appMetafields = (0, _subscription.useSubscription)((0, _api.useExtensionApi)().appMetafields);
  return (0, _react.useMemo)(() => {
    if (filters.key && !filters.namespace) {
      throw new _errors.CheckoutUIExtensionError('You must pass in a namespace with a key');
    }

    const filterKeys = Object.keys(filters);

    if (filterKeys.length) {
      return appMetafields.filter(app => {
        return filterKeys.every(key => {
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
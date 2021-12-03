"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMetafields = useMetafields;
exports.useApplyMetafieldsChange = useApplyMetafieldsChange;

var _react = require("react");

var _errors = require("../errors");

var _api = require("./api");

var _subscription = require("./subscription");

/**
 * Returns the current array of `metafields` applied to the checkout.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
function useMetafields(filters) {
  const metaFields = (0, _subscription.useSubscription)((0, _api.useExtensionApi)().metafields);
  return (0, _react.useMemo)(() => {
    if (filters) {
      const {
        namespace,
        key
      } = filters;

      if (!namespace) {
        throw new _errors.CheckoutUIExtensionError('You must pass in a namespace with a key');
      }

      const filteredResults = metaFields.filter(metafield => metafield.namespace === namespace && (!key || metafield.key === key));
      return filteredResults;
    }

    return metaFields;
  }, [filters, metaFields]);
}
/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */


function useApplyMetafieldsChange() {
  return (0, _api.useExtensionApi)().applyMetafieldChange;
}
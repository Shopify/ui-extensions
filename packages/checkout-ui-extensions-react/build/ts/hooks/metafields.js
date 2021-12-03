"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplyMetafieldsChange = exports.useMetafields = void 0;
const react_1 = require("react");
const errors_1 = require("../errors");
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the current array of `metafields` applied to the checkout.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
function useMetafields(filters) {
    const metaFields = subscription_1.useSubscription(api_1.useExtensionApi().metafields);
    return react_1.useMemo(() => {
        if (filters) {
            const { namespace, key } = filters;
            if (!namespace) {
                throw new errors_1.CheckoutUIExtensionError('You must pass in a namespace with a key');
            }
            const filteredResults = metaFields.filter((metafield) => metafield.namespace === namespace && (!key || metafield.key === key));
            return filteredResults;
        }
        return metaFields;
    }, [filters, metaFields]);
}
exports.useMetafields = useMetafields;
/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */
function useApplyMetafieldsChange() {
    return api_1.useExtensionApi().applyMetafieldChange;
}
exports.useApplyMetafieldsChange = useApplyMetafieldsChange;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppMetafields = void 0;
const react_1 = require("react");
const errors_1 = require("../errors");
const api_1 = require("./api");
const subscription_1 = require("./subscription");
/**
 * Returns the metafields configured via extension.config.yml.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
function useAppMetafields(filters = {}) {
    const appMetafields = subscription_1.useSubscription(api_1.useExtensionApi().appMetafields);
    return react_1.useMemo(() => {
        if (filters.key && !filters.namespace) {
            throw new errors_1.CheckoutUIExtensionError('You must pass in a namespace with a key');
        }
        const filterKeys = Object.keys(filters);
        if (filterKeys.length) {
            return appMetafields.filter((app) => {
                return filterKeys.every((key) => {
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
exports.useAppMetafields = useAppMetafields;

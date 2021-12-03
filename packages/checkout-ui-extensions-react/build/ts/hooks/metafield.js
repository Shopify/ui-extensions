"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMetafield = void 0;
const errors_1 = require("../errors");
const metafields_1 = require("./metafields");
/**
 * Returns a single filtered Metafield or undefined
 * @arg {MetafieldFilter} - filter the list of returned metafields to a single metafield
 */
function useMetafield(filters) {
    const { namespace, key } = filters;
    if (!namespace || !key) {
        throw new errors_1.CheckoutUIExtensionError('You must pass in both a namespace and key');
    }
    const metafields = metafields_1.useMetafields({ namespace, key });
    return metafields.length ? metafields[0] : undefined;
}
exports.useMetafield = useMetafield;

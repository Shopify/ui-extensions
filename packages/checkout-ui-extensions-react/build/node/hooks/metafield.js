"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMetafield = useMetafield;

var _errors = require("../errors");

var _metafields = require("./metafields");

/**
 * Returns a single filtered Metafield or undefined
 * @arg {MetafieldFilter} - filter the list of returned metafields to a single metafield
 */
function useMetafield(filters) {
  const {
    namespace,
    key
  } = filters;

  if (!namespace || !key) {
    throw new _errors.CheckoutUIExtensionError('You must pass in both a namespace and key');
  }

  const metafields = (0, _metafields.useMetafields)({
    namespace,
    key
  });
  return metafields.length ? metafields[0] : undefined;
}
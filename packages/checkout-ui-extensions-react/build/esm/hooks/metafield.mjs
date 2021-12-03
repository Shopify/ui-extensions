import { CheckoutUIExtensionError } from '../errors';
import { useMetafields } from './metafields';

/**
 * Returns a single filtered Metafield or undefined
 * @arg {MetafieldFilter} - filter the list of returned metafields to a single metafield
 */
export function useMetafield(filters) {
  var namespace = filters.namespace,
      key = filters.key;

  if (!namespace || !key) {
    throw new CheckoutUIExtensionError('You must pass in both a namespace and key');
  }

  var metafields = useMetafields({
    namespace: namespace,
    key: key
  });
  return metafields.length ? metafields[0] : undefined;
}
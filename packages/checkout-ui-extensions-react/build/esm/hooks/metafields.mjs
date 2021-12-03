import { useMemo } from 'react';
import { CheckoutUIExtensionError } from '../errors';
import { useExtensionApi } from './api';
import { useSubscription } from './subscription';

/**
 * Returns the current array of `metafields` applied to the checkout.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
export function useMetafields(filters) {
  var metaFields = useSubscription(useExtensionApi().metafields);
  return useMemo(function () {
    if (filters) {
      var namespace = filters.namespace,
          key = filters.key;

      if (!namespace) {
        throw new CheckoutUIExtensionError('You must pass in a namespace with a key');
      }

      var filteredResults = metaFields.filter(function (metafield) {
        return metafield.namespace === namespace && (!key || metafield.key === key);
      });
      return filteredResults;
    }

    return metaFields;
  }, [filters, metaFields]);
}
/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */

export function useApplyMetafieldsChange() {
  return useExtensionApi().applyMetafieldChange;
}
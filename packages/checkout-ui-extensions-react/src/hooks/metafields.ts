import type {
  StandardApi,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';
import {useMemo} from 'react';

import {CheckoutUIExtensionError} from '../errors';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

interface MetafieldsFilters {
  namespace: string;
  key?: string;
}

/**
 * Returns the current array of `metafields` applied to the checkout.
 * You can optionally filter the list.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
export function useMetafields<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(filters?: MetafieldsFilters) {
  const metaFields = useSubscription(useExtensionApi<ID>().metafields);

  return useMemo(() => {
    if (filters) {
      const {namespace, key} = filters;

      if (!namespace) {
        throw new CheckoutUIExtensionError(
          'You must pass in a namespace with a key',
        );
      }

      const filteredResults = metaFields.filter(
        (metafield) =>
          metafield.namespace === namespace && (!key || metafield.key === key),
      );

      return filteredResults;
    }

    return metaFields;
  }, [filters, metaFields]);
}

/**
 * Returns a function to mutate the `metafields` property of the checkout.
 */
export function useApplyMetafieldsChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi<ID>['applyMetafieldChange'] {
  return useExtensionApi<ID>().applyMetafieldChange;
}

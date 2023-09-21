import type {
  Metafield,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';
import {useMemo} from 'react';

import {CustomerAccountUIExtensionError} from '../errors';

import {useApi} from './api';
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
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(filters?: MetafieldsFilters): Metafield[] {
  const metaFields = useSubscription(useApi<Target>().metafields);

  return useMemo(() => {
    if (filters) {
      const {namespace, key} = filters;

      if (!namespace) {
        throw new CustomerAccountUIExtensionError(
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

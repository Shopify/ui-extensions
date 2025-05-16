import {useMemo} from 'preact/hooks';

import type {Metafield} from '../api/standard/standard';
import type {
  MetafieldChange,
  MetafieldChangeResult,
} from '../api/checkout/checkout';
import type {RenderExtensionTarget} from '../extension-targets';

import {CheckoutUIExtensionError, ExtensionHasNoMethodError} from './errors';
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
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: MetafieldChange) => Promise<MetafieldChangeResult> {
  const api = useApi<Target>();

  if ('applyMetafieldChange' in api) {
    return api.applyMetafieldChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyMetafieldChange',
    api.extension.target,
  );
}

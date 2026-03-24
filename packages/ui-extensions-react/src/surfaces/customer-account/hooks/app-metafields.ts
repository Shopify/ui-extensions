import type {
  AppMetafieldEntryTarget,
  Metafield,
  AppMetafieldEntry,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';
import {useMemo} from 'react';

import {
  CustomerAccountUIExtensionError,
  ExtensionHasNoFieldError,
} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

interface AppMetafieldFilters {
  /** Filter by the globally-unique identifier of the resource that owns the metafield. */
  id?: AppMetafieldEntryTarget['id'];
  /**
   * Filter by the resource type that owns the metafield:
   *
   * - `'customer'`: A customer resource.
   * - `'product'`: A product resource.
   * - `'shop'`: The shop resource.
   * - `'variant'`: A product variant resource.
   * - `'company'`: A B2B company resource.
   * - `'companyLocation'`: A B2B company location resource.
   * - `'cart'`: The cart resource.
   */
  type?: AppMetafieldEntryTarget['type'];
  /** Filter by the metafield namespace. Must be used together with `key`. */
  namespace?: Metafield['namespace'];
  /** Filter by the metafield key. Requires `namespace` to also be provided. */
  key?: Metafield['key'];
}

type AppMetafieldFilterKeys = keyof AppMetafieldFilters;

/**
 * Returns the metafields configured with `shopify.ui.extension.toml`.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
export function useAppMetafields<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(filters: AppMetafieldFilters = {}): AppMetafieldEntry[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('appMetafields' in api)) {
    throw new ExtensionHasNoFieldError('appMetafields', extensionTarget);
  }

  const appMetafields = useSubscription(api.appMetafields);

  return useMemo(() => {
    if (filters.key && !filters.namespace) {
      throw new CustomerAccountUIExtensionError(
        'You must pass in a namespace with a key',
      );
    }

    const filterKeys = Object.keys(filters) as AppMetafieldFilterKeys[];

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

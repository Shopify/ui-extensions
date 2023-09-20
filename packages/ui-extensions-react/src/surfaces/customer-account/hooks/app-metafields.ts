import type {
  RenderExtensionTarget,
  AppMetafieldEntryTarget,
  Metafield,
  AppMetafieldEntry,
} from '@shopify/ui-extensions/customer-account';
import {useMemo} from 'react';

import {CustomerAccountUIExtensionError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

interface AppMetafieldFilters {
  id?: AppMetafieldEntryTarget['id'];
  type?: AppMetafieldEntryTarget['type'];
  namespace?: Metafield['namespace'];
  key?: Metafield['key'];
}

type AppMetafieldFilterKeys = keyof AppMetafieldFilters;

/**
 * Returns the metafields configured with `shopify.ui.extension.toml`.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
export function useAppMetafields<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(filters: AppMetafieldFilters = {}): AppMetafieldEntry[] {
  const appMetafields = useSubscription(useApi<Target>().appMetafields);

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

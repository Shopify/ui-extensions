import type {
  RenderExtensionPoint,
  AppMetafieldEntryTarget,
} from '@shopify/argo-checkout';
import {useMemo} from 'react';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

interface AppMetaFieldFilters {
  type?: AppMetafieldEntryTarget['type'];
}

/**
 * Returns the metafields configured via extension.config.yml.
 * @arg {AppMetaFieldFilters} - filter the list of returned meta fields
 */
export function useAppMetafields<
  ID extends RenderExtensionPoint = RenderExtensionPoint
>({type}: AppMetaFieldFilters = {}) {
  const appMetafields = useSubscription(useExtensionApi<ID>().appMetafields);

  return useMemo(() => {
    if (type) {
      return appMetafields.filter((field) => field.target.type === type);
    }

    return appMetafields;
  }, [type, appMetafields]);
}

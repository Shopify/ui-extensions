import type {RenderCustomerAccountFullPageExtensionTarget} from '../extension-targets';
import type {NavigationHistoryEntry} from '../api';

import {useApi} from './api';
import {useEffect, useReducer} from 'preact/hooks';

export function useNavigationCurrentEntry<
  Target extends RenderCustomerAccountFullPageExtensionTarget = RenderCustomerAccountFullPageExtensionTarget,
>(): NavigationHistoryEntry {
  const {currentEntry, removeEventListener, addEventListener} =
    useApi<Target>().navigation;

  const [entry, update] = useReducer(() => currentEntry, currentEntry);

  useEffect(() => {
    if (!currentEntry || !removeEventListener || !addEventListener) {
      throw new Error(
        'useNavigationCurrentEntry must be used in an extension with the customer-account.page.render or customer-account.order.page.render target only',
      );
    }
    addEventListener('currententrychange', update);
    return () => removeEventListener('currententrychange', update);
  }, [addEventListener, currentEntry, removeEventListener]);

  return entry;
}

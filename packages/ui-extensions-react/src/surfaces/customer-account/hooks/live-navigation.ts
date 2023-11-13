import {
  NavigationHistoryEntry,
  RenderCustomerAccountFullPageExtensionTarget,
} from '@shopify/ui-extensions/src/surfaces/customer-account';
import {useApi} from './api';
import {useEffect, useReducer} from 'react';

export function useLiveFullPageNavigation<
  Target extends RenderCustomerAccountFullPageExtensionTarget = RenderCustomerAccountFullPageExtensionTarget,
>(): NavigationHistoryEntry {
  const {currentEntry, removeEventListener, addEventListener} =
    useApi<Target>().navigation;

  const [entry, update] = useReducer(() => {
    if (!currentEntry) {
      throw new Error(
        'useLiveFullPageNavigation must be used in a full page extension only',
      );
    }
    return currentEntry;
  }, currentEntry);

  useEffect(() => {
    if (!removeEventListener || !addEventListener) {
      throw new Error(
        'useLiveFullPageNavigation must be used in a full page extension only',
      );
    }
    addEventListener('currententrychange', update);
    return () => removeEventListener('currententrychange', update);
  }, [addEventListener, removeEventListener]);

  return entry;
}

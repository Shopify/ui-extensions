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

  const [entry, update] = useReducer(() => currentEntry, currentEntry);

  useEffect(() => {
    addEventListener('currententrychange', update);
    return () => removeEventListener('currententrychange', update);
  }, [addEventListener, removeEventListener]);

  return entry;
}

import type {NavigationHistoryEntry} from '../api';
import {useEffect, useReducer} from 'preact/hooks';

export function useNavigationCurrentEntry(): NavigationHistoryEntry {
  const [entry, update] = useReducer(
    () => navigation.currentEntry,
    navigation.currentEntry,
  );

  useEffect(() => {
    if (
      !navigation ||
      !navigation.currentEntry ||
      !navigation.removeEventListener ||
      !navigation.addEventListener
    ) {
      throw new Error(
        'useNavigationCurrentEntry must be used in an extension with the customer-account.page.render or customer-account.order.page.render target only',
      );
    }
    navigation.addEventListener('currententrychange', update);
    return () => navigation.removeEventListener('currententrychange', update);
  }, [navigation]);

  return entry;
}

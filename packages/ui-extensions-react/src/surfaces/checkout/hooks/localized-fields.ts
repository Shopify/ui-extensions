import type {
  LocalizedField,
  LocalizedFieldKey,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current localized fields and
 * re-renders your component if the values change.
 */
export function useLocalizedFields<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(keys: LocalizedFieldKey[]): LocalizedField[] | undefined {
  const {localizedFields} = useApi<Target>();

  if (!localizedFields) {
    throw new ScopeNotGrantedError(
      'Using localized fields requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(localizedFields)?.filter(({key}) =>
    keys.includes(key),
  );
}

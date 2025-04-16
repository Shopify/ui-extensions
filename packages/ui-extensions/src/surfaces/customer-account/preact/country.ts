import {Country} from '../api';
import {RenderExtensionTarget} from '../extension-targets';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from './errors';

/**
 * Returns the country associated with either the current order on the order status page
 * or the selected country in the customer account interface,
 * and automatically re-renders your component if the country changes.
 */
export function useLocalizationCountry<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Country | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('country' in api.localization)) {
    throw new ExtensionHasNoFieldError('country', extensionTarget);
  }

  return useSubscription(api.localization.country);
}

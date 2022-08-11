import type {ExtensionSettings} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the settings values defined by the merchant for this extension.
 */
export function useSettings<Settings extends ExtensionSettings>(): Partial<
  Settings
> {
  const settings = useSubscription(useExtensionApi().settings);

  return settings as Settings;
}

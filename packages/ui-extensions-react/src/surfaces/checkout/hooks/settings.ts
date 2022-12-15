import type {ExtensionSettings} from '@shopify/ui-extensions/checkout';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the setting values defined by the merchant for the extension.
 */
export function useSettings<
  Settings extends ExtensionSettings,
>(): Partial<Settings> {
  const settings = useSubscription(useExtensionApi().settings);

  return settings as Settings;
}

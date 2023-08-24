import type {
  ExtensionSettings,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the setting values defined by the merchant for the extension.
 */
export function useSettings<
  Settings extends ExtensionSettings,
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Partial<Settings> {
  const settings = useSubscription(useApi<Target>().settings);

  return settings as Settings;
}

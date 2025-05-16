import type {RenderExtensionTarget} from '../extension-targets';
import type {Timezone} from '../../../shared';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the time zone of the checkout, and automatically re-renders
 * your component if the time zone changes.
 */
export function useTimezone<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Timezone {
  const {localization} = useApi<Target>();

  return useSubscription(localization.timezone);
}

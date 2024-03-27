import type {RenderExtensionTarget} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): string | undefined {
  return useSubscription(useApi<Target>().note);
}

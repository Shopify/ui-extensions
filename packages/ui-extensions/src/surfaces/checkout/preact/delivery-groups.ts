import type {RenderExtensionTarget} from '../extension-targets';
import type {DeliveryGroup} from '../api/standard/standard';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current delivery groups for the checkout, and automatically re-renders
 * your component when delivery address or delivery option selection changes.
 */
export function useDeliveryGroups<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): DeliveryGroup[] {
  const api = useApi<Target>();
  return useSubscription(api.deliveryGroups);
}

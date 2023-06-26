import type {
  DeliveryGroup,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current delivery groups for the checkout, and automatically re-renders
 * your component when delivery address or delivery option selection changes.
 */
export function useDeliveryGroups<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): DeliveryGroup[] {
  const {deliveryGroups} = useApi<ID>();

  return useSubscription(deliveryGroups);
}

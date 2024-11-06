import type {
  DeliveryGroup,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

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

  if (!('deliveryGroups' in api)) {
    throw new ExtensionHasNoMethodError('deliveryGroups', api.extension.target);
  }

  return useSubscription(api.deliveryGroups);
}

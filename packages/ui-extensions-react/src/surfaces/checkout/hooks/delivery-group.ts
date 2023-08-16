import {useMemo} from 'react';
import type {
  DeliveryGroup,
  DeliveryGroupDetails,
  RenderExtensionTarget,
  DeliveryOption,
  CartLine,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

class DeliveryGroupHookError extends Error {
  name = 'DeliveryGroupHookError';
}

/**
 * Returns the full expanded details of a delivery group and automatically re-renders
 * your component when that delivery group changes.
 */
export function useDeliveryGroup<
  ID extends RenderExtensionTarget = RenderExtensionTarget,
>(deliveryGroup: DeliveryGroup): DeliveryGroupDetails {
  const {lines} = useApi<ID>();
  const cartLines = useSubscription(lines);

  return useMemo(() => {
    if (!deliveryGroup) {
      throw new DeliveryGroupHookError(
        'useDeliveryGroup must be called with a delivery group from the useDeliveryGroups hook',
      );
    }

    const deliveryGroupDetails = {
      ...deliveryGroup,
      selectedDeliveryOption: getSelectedDeliveryOption(deliveryGroup),
      targetedCartLines: getTargetedCartLines(deliveryGroup, cartLines),
    };

    return deliveryGroupDetails;
  }, [deliveryGroup, cartLines]);
}

function getSelectedDeliveryOption(
  deliveryGroup: DeliveryGroup,
): DeliveryOption | undefined {
  const {selectedDeliveryOption, deliveryOptions} = deliveryGroup;

  return deliveryOptions.find(
    (option) => option.handle === selectedDeliveryOption?.handle,
  );
}

function getTargetedCartLines(
  deliveryGroup: DeliveryGroup,
  lines: CartLine[],
): CartLine[] {
  const fullTargetedCartLines: CartLine[] = [];
  for (const targetedLine of deliveryGroup.targetedCartLines) {
    const line = lines.find((line) => line.id === targetedLine.id);
    if (line) fullTargetedCartLines.push(line);
  }

  return fullTargetedCartLines;
}

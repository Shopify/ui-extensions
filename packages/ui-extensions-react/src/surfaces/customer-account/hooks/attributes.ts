import type {
  Attribute,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `attributes` applied to the checkout.
 */
export function useAttributes<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Attribute[] | undefined {
  return useSubscription(useApi<Target>().attributes);
}

/**
 * Returns the values for the specified `attributes` applied to the checkout.
 *
 * @param keys - An array of attribute keys.
 */
export function useAttributeValues<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(keys: string[]): (string | undefined)[] {
  const attributes = useAttributes<Target>();

  if (!attributes?.length) {
    return [];
  }

  return keys.map((key) => {
    const attribute = attributes.find((attribute) => attribute.key === key);
    return attribute?.value;
  });
}

import type {
  Attribute,
  AttributeChange,
  AttributeChangeResult,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `attributes` applied to the checkout.
 */
export function useAttributes<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Attribute[] | undefined {
  return useSubscription(useApi<ID>().attributes);
}

/**
 * Returns the values for the specified `attributes` applied to the checkout.
 *
 * @param keys - An array of attribute keys.
 */
export function useAttributeValues<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(keys: string[]): (string | undefined)[] {
  const attributes = useAttributes<ID>();

  if (!attributes?.length) {
    return [];
  }

  return keys.map((key) => {
    const attribute = attributes.find((attribute) => attribute.key === key);
    return attribute?.value;
  });
}

/**
 * Returns a function to mutate the `attributes` property of the checkout.
 */
export function useApplyAttributeChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): (change: AttributeChange) => Promise<AttributeChangeResult> {
  const api = useApi<ID>();

  if ('applyAttributeChange' in api) {
    return api.applyAttributeChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyAttributeChange',
    api.extensionPoint,
  );
}

import type {
  Attribute,
  AttributeChange,
  AttributeChangeResult,
  RenderExtensionPoint,
} from '@shopify/ui-extensions/checkout';

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

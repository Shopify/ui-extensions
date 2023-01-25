import type {
  AppliedGiftCard,
  StandardApi,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current gift cards applied to the cart, and automatically re-renders
 * your component if gift cards are added or removed.
 */
export function useAppliedGiftCards<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): AppliedGiftCard[] {
  const {appliedGiftCards} = useExtensionApi<ID>();

  return useSubscription(appliedGiftCards);
}

/**
 * Returns a function to add or remove gift cards.
 */
export function useApplyGiftCardChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi<ID>['applyGiftCardChange'] {
  return useExtensionApi<ID>().applyGiftCardChange;
}

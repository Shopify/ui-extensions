import type {
  AppliedGiftCard,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current gift cards applied to the cart, and automatically re-renders
 * your component if gift cards are added or removed.
 */
export function useAppliedGiftCards<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): AppliedGiftCard[] {
  const {appliedGiftCards} = useApi<Target>();

  return useSubscription(appliedGiftCards);
}

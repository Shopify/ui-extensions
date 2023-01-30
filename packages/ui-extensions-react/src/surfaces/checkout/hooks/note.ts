import type {
  RenderExtensionPoint,
  StandardApi,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  return useSubscription(useApi<ID>().note);
}

/**
 * Returns a function to mutate the `note` property of the checkout.
 */
export function useApplyNoteChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): StandardApi<ID>['applyNoteChange'] {
  return useApi<ID>().applyNoteChange;
}

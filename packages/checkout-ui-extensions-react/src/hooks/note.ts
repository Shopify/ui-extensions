import type {
  NoteChange,
  NoteChangeResult,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): string | undefined {
  return useSubscription(useApi<ID>().note);
}

/**
 * Returns a function to mutate the `note` property of the checkout.
 */
export function useApplyNoteChange<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): (change: NoteChange) => Promise<NoteChangeResult> {
  const api = useApi<ID>();

  if ('applyNoteChange' in api) {
    return api.applyNoteChange;
  }

  throw new ExtensionHasNoMethodError('applyNoteChange', api.extensionPoint);
}

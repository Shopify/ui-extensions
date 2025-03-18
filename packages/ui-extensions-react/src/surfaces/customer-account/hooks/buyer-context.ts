import type {
  BuyerContextData,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {ExtensionHasNoFieldError} from '../errors';

import {useApi} from './api';

export function useBuyerContext<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): BuyerContextData {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;
  const buyerContext = api.buyerContext;

  console.log({buyerContext});

  if (!('selectedCountry' in buyerContext)) {
    throw new ExtensionHasNoFieldError('buyerIdentity', extensionTarget);
  }

  return buyerContext;
}

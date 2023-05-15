import type {
  Customer,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {ScopeNotGrantedError} from '../errors';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current `Customer`.
 *
 * The value is `undefined` if the buyer isn't a known customer for this shop or if they haven't logged in yet.
 */
export function useCustomer<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Customer | undefined {
  const buyerIdentity = useExtensionApi<ID>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.customer);
}

/**
 * Returns the email address of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function useEmail<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): string | undefined {
  const buyerIdentity = useExtensionApi<ID>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.email);
}

/**
 * Returns the phone number of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function usePhone<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): string | undefined {
  const buyerIdentity = useExtensionApi<ID>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.phone);
}

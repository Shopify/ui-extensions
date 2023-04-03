import type {
  Customer,
  RenderExtensionPoint,
} from '@shopify/checkout-ui-extensions';

import {ScopeNotGrantedError} from '../errors';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the account belonging to the customer.
 *
 * The value is a `Customer` if the customer has an account and is logged in,
 * `undefined` otherwise.
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

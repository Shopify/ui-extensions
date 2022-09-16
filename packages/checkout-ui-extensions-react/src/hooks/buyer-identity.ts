import type {RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {ScopeNotGrantedError} from '../errors';

import {useExtensionApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the account belonging to the customer.
 *
 * The value is `undefined` if the customer doesn’t have
 * an account or if they aren’t logged in.
 */
export function useCustomer<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>() {
  const buyerIdentity = useExtensionApi<ID>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.customer);
}

import {Order, RenderExtensionPoint} from '@shopify/checkout-ui-extensions';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the order information that's available post-checkout.
 */
export function useOrder<
  ID extends RenderExtensionPoint = RenderExtensionPoint,
>(): Order | undefined {
  const api = useApi<ID>();

  if ('order' in api) {
    return useSubscription(api.order);
  }

  throw new ExtensionHasNoMethodError('order', api.extensionPoint);
}

import type {
  Cart,
  StatefulRemoteSubscribable,
} from '@shopify/retail-ui-extensions/src';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions';
import {useExtensionApi} from '../utils';

/**
 * Global instance of the subscribable that is created on the first `useStatefulSubscribableCart` call.
 * Use `destroyStatefulSubscribableCart` to destroy it and all of the subscribers.
 */
let statefulSubscribable: StatefulRemoteSubscribable<Cart> | undefined;

/**
 * Verifies that the API has a Cart in it.
 */
const isCartApi = (api: any): boolean => {
  return 'cart' in api;
};

/**
 * A hook utilizing the `makeStatefulSubscribable` function to allow multiple Cart subscriptions.
 * @returns StatefulRemoteSubscribable object with a Cart in it.
 */
export function useStatefulSubscribableCart() {
  const api = useExtensionApi();
  if (!isCartApi(api)) {
    throw new Error('No cart api found');
  }
  const {subscribable} = api.cart;

  if (!statefulSubscribable) {
    statefulSubscribable = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribable;
}
/**
 * A function destroying the subscriptions `useStatefulSubscribableCart` has.
 */
export function destroyStatefulSubscribableCart() {
  statefulSubscribable?.destroy();
  statefulSubscribable = undefined;
}

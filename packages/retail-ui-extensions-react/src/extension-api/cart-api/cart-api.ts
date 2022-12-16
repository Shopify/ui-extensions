import {useRef} from 'react';
import type {
  Cart,
  StatefulRemoteSubscribable,
} from '@shopify/retail-ui-extensions/src';
import {makeStatefulSubscribable} from '@shopify/retail-ui-extensions/src';
import {useExtensionApi} from '../utils';

const isCartApi = (api: any): boolean => {
  return 'cart' in api;
};

export function useStatefulSubscribableCart() {
  const api = useExtensionApi();
  if (!isCartApi(api)) {
    throw new Error('No cart api found');
  }
  const {subscribable} = api.cart;

  const statefulSubscribableRef = useRef<StatefulRemoteSubscribable<Cart>>();
  if (!statefulSubscribableRef.current) {
    statefulSubscribableRef.current = makeStatefulSubscribable(subscribable);
  }

  return statefulSubscribableRef.current;
}

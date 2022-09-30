import {useEffect, useState} from 'react';
import type {Cart} from '@shopify/retail-ui-extensions/src';
import {useExtensionApi} from '../utils';

const isCartApi = (api: any): boolean => {
  return 'cart' in api;
};

export function useCart() {
  const api = useExtensionApi();
  if (!isCartApi(api)) {
    throw new Error('No cart api found');
  }

  const {
    cart: {initialValue, setOnChange},
  } = api;
  const [cart, setCart] = useState(initialValue);

  useEffect(() => {
    setOnChange((newCart: Cart) => setCart(newCart));
  }, [setOnChange]);

  return cart;
}

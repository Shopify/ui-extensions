import type {CartApiContent} from './CartApiContent';

/**
 * Access the merchant’s current cart.
 */
export interface CartApi {
  cart: CartApiContent;
}

export function isCartApi(api: any): api is CartApi {
  return 'cart' in api;
}

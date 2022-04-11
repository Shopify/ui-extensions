import type {CartApiContent} from './cart-api-content';

/**
 * Access the merchant’s current cart.
 */
export interface CartApi {
  cart: CartApiContent;
}

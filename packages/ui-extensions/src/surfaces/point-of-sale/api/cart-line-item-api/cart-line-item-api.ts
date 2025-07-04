import type {LineItem} from '../../types/cart';

/**
 * Access to the selected line item in the merchant’s current cart.
 */
export interface CartLineItemApi {
  /**
   * The selected line item in the merchant’s current cart.
   */
  cartLineItem: LineItem;
}

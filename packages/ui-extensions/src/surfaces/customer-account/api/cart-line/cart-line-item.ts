import {CartLine} from '../order-status/order-status';

export interface CartLineItemApi {
  /**
   * The cart line the extension is attached to.
   */
  target: CartLine;
}

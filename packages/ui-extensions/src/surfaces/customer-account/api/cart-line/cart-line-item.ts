import {CartLine} from '../order-status/order-status';
import {ReadonlySignalLike} from '../shared';

export interface CartLineItemApi {
  /**
   * The cart line the extension is attached to.
   */
  target: ReadonlySignalLike<CartLine>;
}

import {CartLine} from '../order-status/order-status';
import {SubscribableSignalLike} from '../shared';

export interface CartLineItemApi {
  /**
   * The cart line the extension is attached to.
   */
  target: SubscribableSignalLike<CartLine>;
}

import {CartLine} from '../order-status/order-status';
import {StatefulRemoteSubscribable} from '../shared';

export interface CartLineItemApi {
  /**
   * The cart line the extension is attached to.
   */
  target: StatefulRemoteSubscribable<CartLine>;
}

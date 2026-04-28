import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {CartLine} from '../order-status/order-status';

export interface CartLineItemApi {
  /**
   * The cart line that this extension is attached to. Use this to read the line item's merchandise, quantity, cost, and attributes.
   */
  target: StatefulRemoteSubscribable<CartLine>;
}

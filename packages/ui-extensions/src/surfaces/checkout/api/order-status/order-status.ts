import {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

/**
 * Information about an order that was placed.
 */
export interface Order {
  /**
   * A globally-unique identifier.
   * @example 'gid://shopify/Order/1'
   */
  id: string;
  /**
   * Unique identifier for the order that appears on the order.
   * @example '#1000'
   */
  name: string;
  /**
   * If cancelled, the time at which the order was cancelled.
   */
  cancelledAt?: string;
  /**
   * A randomly generated alpha-numeric identifier for the order.
   */
  confirmationNumber?: string;
}

export interface OrderStatusApi {
  /**
   * Order information that's available post-checkout.
   */
  order: StatefulRemoteSubscribable<Order | undefined>;
}

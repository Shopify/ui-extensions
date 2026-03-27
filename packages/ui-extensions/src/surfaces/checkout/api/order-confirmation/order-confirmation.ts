import type {SubscribableSignalLike} from '../../shared';

export interface OrderConfirmation {
  order: {
    /**
     * A globally unique identifier for the order. This becomes the `Order`
     * resource ID in the Admin API once the order is fully created.
     *
     * @example 'gid://shopify/Order/123'
     */
    id: string;
  };
  /**
   * A randomly generated alpha-numeric identifier for the order, distinct from the `order.id`. The value is `undefined` for orders created before 2024; all orders from 2024 onward always have a number.
   */
  number?: string;

  /**
   * Whether this is the customer's first completed order with this shop. `true` means the buyer hasn't placed an order here before. Use this to show first-purchase messaging or trigger welcome offers.
   */
  isFirstOrder: boolean;
}

/** @publicDocs */
export interface OrderConfirmationApi {
  /**
   * The order details available after the buyer completes checkout, including the order ID, order number, and whether it's the buyer's first purchase.
   */
  orderConfirmation: SubscribableSignalLike<OrderConfirmation>;
}

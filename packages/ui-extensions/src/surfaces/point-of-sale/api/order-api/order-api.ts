import type {Order} from '../../types/order';

/**
 * The `OrderApi` object provides access to order data in order-specific extension contexts. Access this property through `shopify.order` to retrieve information about the order currently being viewed or interacted with in the POS interface.
 * @publicDocs
 */
export interface OrderApi {
  order: OrderApiContent;
}

/**
 * The `OrderApi` object provides access to order data. Access this property through `shopify.order` to interact with the current order context.
 * @publicDocs
 */
export interface OrderApiContent extends Order {
  /**
   * The unique identifier of the customer associated with the order. Returns `undefined` if no customer is associated. Use for customer-specific functionality and personalized experiences.
   */
  customerId?: number;
}

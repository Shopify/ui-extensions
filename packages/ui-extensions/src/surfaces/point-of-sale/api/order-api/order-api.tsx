/**
 * Interface to access the order
 */
export interface OrderApi {
  order: OrderAPIContent;
}

/**
 * Interface for Order details
 */
export interface OrderAPIContent {
  /**
   * The unique identifier for the order
   */
  id: number;

  /**
   * The name of the order
   */
  name: string;

  /**
   * The unique identifier of the customer associated with the order
   */
  customerId?: number;
}

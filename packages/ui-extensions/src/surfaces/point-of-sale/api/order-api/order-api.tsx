/**
 * Interface to access the order
 */
export interface OrderAPIContent {
  order: Order;
}

/**
 * Interface for Order details
 */
export interface Order {
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

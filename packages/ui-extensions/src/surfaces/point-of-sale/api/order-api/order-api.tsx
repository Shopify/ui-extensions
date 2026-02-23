/**
 * Interface to access the order
 */
/** @publicDocs */
export interface OrderApi {
  order: OrderAPIContent;
}

/**
 * Interface for Order details
 */
/** @publicDocs */
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

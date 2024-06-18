export interface DraftOrderApi {
  draftOrder: DraftOrderApiContent;
}

export interface DraftOrderApiContent {
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

export interface FulfillmentApiContent {
  /** Presents the `pos.order.fulfillment-task.modal.render` extension point on top of the fulfillment tasklist.
   */
  presentModal(): void;
}

/**
 * Access the Fulfillment API to present your app in a full screen modal.
 */
export interface FulfillmentApi {
  fulfillment: FulfillmentApiContent;
}

import type {Order} from '../../types/order';

/**
 * The `DraftOrderApi` object provides access to draft order data in draft order-specific extension contexts. Access this property through `shopify.draftOrder` to retrieve information about the draft order currently being viewed or interacted with in the POS interface.
 * @publicDocs
 */
export interface DraftOrderApi {
  draftOrder: DraftOrderApiContent;
}

/**
 * The `DraftOrderApi` object provides draft order details for the active context.
 * @publicDocs
 */
export interface DraftOrderApiContent extends Order {
  /**
   * The unique identifier of the customer associated with the draft order. Returns `undefined` if no customer is associated. Use for customer-specific functionality and personalized experiences.
   */
  customerId?: number;
}

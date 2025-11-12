/**
 * The `DraftOrderApi` object provides access to draft order data in draft order-specific extension contexts. Access this property through `shopify.draftOrder` to retrieve information about the draft order currently being viewed or interacted with in the POS interface.
 */
export interface DraftOrderApi {
  draftOrder: DraftOrderApiContent;
}

export interface DraftOrderApiContent {
  /**
   * The unique numeric identifier for the draft order currently in context. This ID is consistent across all Shopify systems and APIs, allowing you to retrieve full draft order details using GraphQL queries or link to draft order records in external systems.
   *
   * Draft orders are preliminary orders that merchants create and save before finalizing them into actual orders—they can be edited, sent as invoices to customers, or converted to completed orders later. The ID corresponds to the draft order whose details page is currently open in POS.
   *
   * Commonly used for loading complete draft order information (line items, pricing, customer, notes), tracking draft order status, implementing draft order workflows, or integrating with external order preparation systems.
   */
  id: number;

  /**
   * The human-readable draft order name or number as configured by the merchant (for example, "#D1", "#DRAFT-1001"). This is the identifier shown in draft order lists, admin interfaces, and invoices sent to customers. The naming scheme follows the merchant's draft order configuration in Shopify settings.
   *
   * Commonly used for displaying the draft order reference in UI, searching for draft orders, communicating draft order identifiers to customers using invoices, or including in administrative workflows. This is different from the `id` which is an internal numeric identifier.
   */
  name: string;

  /**
   * The unique numeric identifier of the customer associated with this draft order. This links the draft order to a customer account in Shopify. Returns `undefined` when no customer is associated with the draft order—draft orders can exist without customer association if the merchant hasn't assigned a customer yet.
   *
   * When present, this ID can be used to retrieve full customer details, load customer purchase history, apply customer-specific pricing, or link to customer records in external CRM systems. The customer can be assigned to the draft order before it's converted to a completed order.
   */
  customerId?: number;
}

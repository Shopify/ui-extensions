/**
 * The `OrderApi` object provides access to order data in order-specific extension contexts. Access this property through `shopify.order` to retrieve information about the order currently being viewed or interacted with in the POS interface.
 */
export interface OrderApi {
  order: OrderApiContent;
}

/**
 * Contains order identification and basic metadata for the order currently in context.
 */
export interface OrderApiContent {
  /**
   * The unique numeric identifier for the order currently in context. This ID is consistent across all Shopify systems and APIs, allowing you to retrieve full order details using GraphQL queries, link to order records in external systems, or perform order-specific operations. The ID corresponds to the order whose details page is currently open in POS or the order associated with the current extension context.
   *
   * Commonly used for loading complete order information (line items, fulfillment status, payments, shipping), fetching order data from external order management systems, implementing order-based business logic (special handling for certain order types), tracking order-specific analytics, or integrating order data with shipping carriers or accounting systems.
   */
  id: number;

  /**
   * The human-readable order name or number as configured by the merchant (for example, "#1001", "#1002"). This is the customer-facing order identifier shown on receipts, confirmation emails, and in the customer's order history. The name follows the merchant's order numbering scheme configured in Shopify settings and is typically sequential.
   *
   * Commonly used for displaying the order reference in UI, communicating order numbers to customers, searching for orders, or including in customer communications and support interactions. This is different from the `id` which is an internal numeric identifier.
   */
  name: string;

  /**
   * The unique numeric identifier of the customer associated with this order. This links the order to a customer account in Shopify. Returns `undefined` for guest orders where no customer account was selected or created during checkout, or when the order doesn't have customer association.
   *
   * When present, this ID can be used to retrieve full customer details, load customer history, apply customer-specific logic, or link to customer records in external systems. The customer ID corresponds to the same customer available through the Customer API if accessed in customer contexts.
   */
  customerId?: number;
}

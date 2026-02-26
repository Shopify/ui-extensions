/**
 * The `CustomerApi` object provides access to customer data in customer-specific extension contexts. Access this property through `api.customer` to retrieve information about the customer currently being viewed or interacted with in the POS interface.
 */
export interface CustomerApi {
  customer: CustomerApiContent;
}

/**
 * The `CustomerApi` object provides access to customer data. Access these properties through `api.customer` to interact with the current customer context.
 *
 * @publicDocs
 */
export interface CustomerApiContent {
  /**
   * The unique identifier for the customer. Use for customer lookups, applying customer-specific pricing, enabling personalized features, and integrating with external systems.
   */
  id: number;
}

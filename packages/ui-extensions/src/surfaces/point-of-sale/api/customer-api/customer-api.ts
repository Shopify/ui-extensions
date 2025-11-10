/**
 * The `CustomerApi` object provides access to customer data in customer-specific extension contexts. Access this property through `shopify.customer` to retrieve information about the customer currently being viewed or interacted with in the POS interface.
 */
export interface CustomerApi {
  customer: CustomerApiContent;
}

export interface CustomerApiContent {
  /**
   * The unique numeric identifier for the customer currently in context. This ID is consistent across all Shopify systems and APIs, allowing you to retrieve full customer details using GraphQL queries, link to customer records in external systems, or perform customer-specific operations. The ID corresponds to the customer whose details page is currently open in POS or the customer associated with the current context.
   *
   * Commonly used for loading additional customer data (purchase history, addresses, tags), applying customer-specific pricing or discounts, personalizing the extension experience based on customer segments or loyalty tiers, tracking customer-specific analytics, or integrating customer data with external CRM or loyalty systems.
   */
  id: number;
}

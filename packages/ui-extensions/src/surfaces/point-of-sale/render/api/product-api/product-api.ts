/**
 * The `ProductApi` object provides access to product and variant data in product-specific extension contexts. Access this property through `api.product` to retrieve information about the product or variant currently being viewed or interacted with in the POS interface.
 */
export interface ProductApi {
  product: ProductApiContent;
}

export interface ProductApiContent {
  /**
   * The unique numeric identifier for the product currently in context. This ID is consistent across all Shopify systems and APIs, allowing you to retrieve full product details using the Product Search API or GraphQL queries. The ID corresponds to the product whose details page is currently open in POS or the product associated with the current extension context.
   *
   * Commonly used for loading complete product information (title, description, all variants, images, inventory), fetching product-specific data from external systems, implementing product-based business logic (restrictions, special handling, upsells), tracking product-specific analytics, or displaying additional product details not available in the basic context.
   */
  id: number;
  /**
   * The unique numeric identifier for the specific product variant currently in context. This ID identifies a particular configuration of the product (specific size/color/material combination). The variant ID is consistent across all Shopify systems and APIs, allowing you to retrieve full variant details including pricing, inventory, SKU, and barcode.
   *
   * Commonly used for adding this specific variant to cart, checking variant-specific inventory levels, displaying variant details (price, availability, options), implementing variant-based business logic, or loading variant data from external systems. When the product has only one default variant, this ID represents that single variant.
   */
  variantId: number;
}

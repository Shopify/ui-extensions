import type {MultipleResourceResult} from '../types/multiple-resource-result';
import type {PaginatedResult} from '../types/paginated-result';
import type {Product, ProductVariant} from '../types/product';

export type ProductSortType =
  | 'RECENTLY_ADDED'
  | 'RECENTLY_ADDED_ASCENDING'
  | 'ALPHABETICAL_A_TO_Z'
  | 'ALPHABETICAL_Z_TO_A';

/**
 * Specifies parameters for cursor-based pagination. Includes the cursor position and the number of results to retrieve per page.
 */
export interface PaginationParams {
  /**
   * Specifies the number of results to be returned in this page. The maximum number of items that will be returned is 50. Use to control page size based on your UI requirements and performance considerations.
   */
  first?: number;
  /**
   * Specifies the page cursor. Items after this cursor will be returned in the next page. Use the cursor from previous search results to implement pagination and load additional products as users navigate through search results.
   */
  afterCursor?: string;
}

/**
 * Specifies the parameters for searching products. Includes query text, pagination options, and sorting preferences for product search operations.
 */
export interface ProductSearchParams extends PaginationParams {
  /**
   * The search term used to find products by name, description, or other searchable fields. When provided, results are automatically sorted by relevance to the query, overriding any `sortType` setting. Use for implementing text-based product search functionality.
   */
  queryString?: string;
  /**
   * Specifies the order in which products should be sorted. When a `queryString` is provided, sortType will not have any effect, as the results will be returned in order by relevance to the `queryString`. Available options:
   *
   * - **`RECENTLY_ADDED`** - Sorts products by creation date in descending order, displaying the most recently added products first. Use to highlight new inventory additions or showcase latest product arrivals.
   * - **`RECENTLY_ADDED_ASCENDING`** - Sorts products by creation date in ascending order, displaying the oldest products first. Use when prioritizing established products or implementing chronological browsing from earliest to newest.
   * - **`ALPHABETICAL_A_TO_Z`** - Sorts products alphabetically by title from A to Z. Use for product catalogs where alphabetical organization improves browsing efficiency and helps users locate products by name quickly.
   * - **`ALPHABETICAL_Z_TO_A`** - Sorts products alphabetically by title from Z to A in reverse order. Use when reverse alphabetical sorting is needed for specialized browsing patterns or user preferences.
   */
  sortType?: ProductSortType;
}

/** @publicDocs */
export interface ProductSearchApiContent {
  /**
   * Searches for products on the POS device using text queries and sorting options. Returns paginated results with up to 50 products per page. When a query string is provided, results are sorted by relevance. Use for implementing custom search interfaces, product discovery features, or filtered product listings.
   *
   * @param searchParams The parameters for the product search.
   */
  searchProducts(
    searchParams: ProductSearchParams,
  ): Promise<PaginatedResult<Product>>;

  /**
   * Retrieves detailed information for a single product by its ID. Returns `undefined` if the product doesn't exist or isn't available on the POS device. Use for displaying product details, validating product availability, or building product-specific workflows.
   *
   * @param productId The ID of the product to lookup.
   */
  fetchProductWithId(productId: number): Promise<Product | undefined>;

  /**
   * Retrieves detailed information for multiple products by their IDs. Limited to 50 products maximum—additional IDs are automatically removed. Returns results with both found and not found products clearly identified. Use for bulk product lookups, building product collections, or validating product lists.
   *
   * @param productIds Specifies the array of product IDs to lookup. This is limited to 50 products. All excess requested IDs will be removed from the array.
   */
  fetchProductsWithIds(
    productIds: number[],
  ): Promise<MultipleResourceResult<Product>>;

  /**
   * Retrieves detailed information for a single product variant by its ID. Returns `undefined` if the variant doesn't exist or isn't available. Use for displaying variant-specific details like pricing, inventory, or options when working with specific product configurations.
   *
   * @param productVariantId The ID of the product variant to lookup.
   */
  fetchProductVariantWithId(
    productVariantId: number,
  ): Promise<ProductVariant | undefined>;

  /**
   * Retrieves detailed information for multiple product variants by their IDs. Limited to 50 variants maximum—additional IDs are automatically removed. Returns results with both found and not found variants clearly identified. Use for bulk variant lookups or building variant-specific collections.
   *
   * @param productVariantIds Specifies the array of product variant IDs to lookup. This is limited to 50 product variants. All excess requested IDs will be removed from the array.
   */
  fetchProductVariantsWithIds(
    productVariantIds: number[],
  ): Promise<MultipleResourceResult<ProductVariant>>;

  /**
   * Retrieves all product variants associated with a specific product ID. Returns all variants at once without pagination. Use for displaying complete variant options, building variant selectors, or analyzing all available configurations for a product.
   *
   * @param productId The product ID. All variants' details associated with this product ID are returned.
   */
  fetchProductVariantsWithProductId(
    productId: number,
  ): Promise<ProductVariant[]>;

  /**
   * Retrieves product variants for a specific product with pagination support. Use when a product has many variants and you need to load them incrementally for better performance. Ideal for products with extensive variant collections that would be too large to load at once.
   *
   * @param paginationParams The parameters for pagination.
   */
  fetchPaginatedProductVariantsWithProductId(
    productId: number,
    paginationParams: PaginationParams,
  ): Promise<PaginatedResult<ProductVariant>>;
}

/**
 * The `ProductSearchApi` object provides methods for searching and retrieving product information. Access these methods through `api.productSearch` to search products and fetch detailed product data.
 */
export interface ProductSearchApi {
  productSearch: ProductSearchApiContent;
}

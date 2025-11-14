import type {MultipleResourceResult} from '../../../types/multiple-resource-result';
import type {PaginatedResult} from '../../../types/paginated-result';
import type {Product, ProductVariant} from '../../../types/product';

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
   * Specifies the number of results to be returned in this page. The maximum value is 50—values above 50 are clamped to 50. Smaller page sizes (10-20) provide faster initial response times and lower memory usage. Larger page sizes (40-50) reduce the number of API calls needed but increase initial load time and memory consumption. The actual number of items returned may be less than requested if fewer items exist or if you're on the last page.
   *
   * Commonly used to control page size based on UI layout (items per screen), performance requirements (device capabilities), or user preference (configurable pagination).
   */
  first?: number;
  /**
   * The pagination cursor pointing to a specific position in the result set. When provided, the API returns items that come after this cursor position, enabling sequential page navigation. This is an opaque string token obtained from the `lastCursor` field of previous search results—its internal format is implementation-specific and shouldn't be parsed or constructed manually.
   *
   * To fetch the next page, the `lastCursor` from the current page is passed as the `afterCursor` for the next request. Returns items from the beginning of the result set when omitted. The cursor is only valid for the same search query and sort order—changing query parameters invalidates previous cursors.
   */
  afterCursor?: string;
}

/**
 * Specifies the parameters for searching products. Includes query text, pagination options, and sorting preferences for product search operations.
 */
export interface ProductSearchParams extends PaginationParams {
  /**
   * The search term used to find products by name, description, SKU, barcode, tags, or other searchable product fields. The search is case-insensitive and supports partial matches—searching for "blue shirt" will find products with "Blue Cotton Shirt" or "Shirt - Blue". When provided, results are automatically sorted by relevance to the query (most relevant first), overriding any `sortType` setting.
   *
   * When omitted or empty, all products are returned subject to `sortType` and pagination. Special characters and punctuation are normalized during search. Commonly used for implementing text-based product search, autocomplete suggestions, or filtered product browsing.
   */
  queryString?: string;
  /**
   * Specifies the order in which products should be sorted. When a `queryString` is provided, `sortType` won't have any effect, as the results will be returned in order by relevance to the `queryString`. Available options:
   *
   * - **`RECENTLY_ADDED`** - Sorts products by creation date in descending order, displaying the most recently added products first. Commonly used to highlight new inventory additions or showcase latest product arrivals.
   * - **`RECENTLY_ADDED_ASCENDING`** - Sorts products by creation date in ascending order, displaying the oldest products first. Typically applied when prioritizing established products or implementing chronological browsing from earliest to newest
   * - **`ALPHABETICAL_A_TO_Z`** - Sorts products alphabetically by title from A to Z. Commonly used for product catalogs where alphabetical organization improves browsing efficiency and helps users locate products by name quickly.
   * - **`ALPHABETICAL_Z_TO_A`** - Sorts products alphabetically by title from Z to A in reverse order. Typically applied when reverse alphabetical sorting is needed for specialized browsing patterns or user preferences.
   */
  sortType?: ProductSortType;
}

export interface ProductSearchApiContent {
  /**
   * Searches for products stored locally on the POS device using text queries, sorting options, and pagination. Returns paginated results with up to 50 products per page. The search operates on the device's local product database (synced from Shopify), ensuring fast results even offline.
   *
   * When a `queryString` is provided, results are automatically sorted by relevance to the search term. When no query is provided, returns all available products in the specified sort order. The search includes product titles, descriptions, SKUs, barcodes, and tags. Results only include products that are available to this POS location based on inventory settings.
   *
   * Commonly used for implementing custom product search interfaces, building product catalogs, implementing barcode-based product lookup, or creating filtered product selection workflows.
   *
   * @param searchParams The parameters for the product search.
   */
  searchProducts(
    searchParams: ProductSearchParams,
  ): Promise<PaginatedResult<Product>>;

  /**
   * Retrieves complete detailed information for a single product by its unique numeric ID. Returns a full `Product` object with all product data including title, description, images, variants, pricing, inventory, and options. Returns `undefined` if the product doesn't exist in Shopify, isn't synced to this POS device, or isn't available to this location. The product data is fetched from the device's local database for fast access.
   *
   * Commonly used for displaying full product details, validating product availability before adding to cart, loading product information by ID from external sources, or building product-specific features that need complete product data.
   *
   * @param productId The ID of the product to lookup.
   */
  fetchProductWithId(productId: number): Promise<Product | undefined>;

  /**
   * Retrieves detailed information for multiple products in a single bulk operation by their IDs. Limited to 50 products maximum—if more than 50 IDs are provided, only the first 50 are processed and additional IDs are automatically removed. Returns a `MultipleResourceResult` containing two arrays: `fetchedResources` with successfully found products, and `idsForResourcesNotFound` with IDs that couldn't be found.
   *
   * This allows handling partial success scenarios where some IDs are valid and others aren't. Products may be missing because they don't exist, aren't synced to this device, or aren't available to this location.
   *
   * Commonly used for bulk product lookups (validating lists of IDs), building product collections from ID arrays, displaying multiple products simultaneously, or validating product availability across multiple items.
   *
   * @param productIds Specifies the array of product IDs to lookup. This is limited to 50 products. All excess requested IDs will be removed from the array.
   */
  fetchProductsWithIds(
    productIds: number[],
  ): Promise<MultipleResourceResult<Product>>;

  /**
   * Retrieves complete detailed information for a single product variant by its unique numeric ID. Returns a full `ProductVariant` object with all variant data including pricing, inventory levels, SKU, barcode, weight, options (size, color), and images. Returns `undefined` if the variant doesn't exist in Shopify, isn't synced to this POS device, or isn't available to this location. The variant data is fetched from the device's local database.
   *
   * Commonly used for displaying variant-specific details when a specific variant is already known, loading variant information when adding specific configurations to cart, checking inventory for a particular variant, or retrieving variant details by scanned barcode.
   *
   * @param productVariantId The ID of the product variant to lookup.
   */
  fetchProductVariantWithId(
    productVariantId: number,
  ): Promise<ProductVariant | undefined>;

  /**
   * Retrieves detailed information for multiple product variants in a single bulk operation by their IDs. Limited to 50 variants maximum—if more than 50 IDs are provided, only the first 50 are processed and additional IDs are automatically removed. Returns a `MultipleResourceResult` containing two arrays: `fetchedResources` with successfully found variants, and `idsForResourcesNotFound` with IDs that couldn't be found.
   *
   * This allows handling partial success scenarios where some variant IDs are valid and others aren't. Variants may be missing because they don't exist, were deleted, aren't synced to this device, or aren't available to this location.
   *
   * Commonly used for bulk variant inventory checks across multiple products, validating variant ID lists before operations, loading variant data for multiple cart items, or building variant comparison features.
   *
   * @param productVariantIds Specifies the array of product variant IDs to lookup. This is limited to 50 product variants. All excess requested IDs will be removed from the array.
   */
  fetchProductVariantsWithIds(
    productVariantIds: number[],
  ): Promise<MultipleResourceResult<ProductVariant>>;

  /**
   * Retrieves all product variants associated with a specific product ID in a single call without pagination. Returns a complete array of all variants for the product, regardless of how many variants exist. For products with many variants (50+), this loads all variants at once which may impact performance and memory usage—consider using `fetchPaginatedProductVariantsWithProductId` instead for products with extensive variant catalogs. The variant order in the returned array follows the product's variant configuration.
   *
   * Commonly used for displaying complete variant selection interfaces (showing all available size/color/material combinations), building variant comparison tables, loading all variant options upfront for product detail pages, or when the complete variant set is needed immediately.
   *
   * @param productId The product ID. All variants' details associated with this product ID are returned.
   */
  fetchProductVariantsWithProductId(
    productId: number,
  ): Promise<ProductVariant[]>;

  /**
   * Retrieves product variants for a specific product with pagination support, loading variants in pages rather than all at once. Returns paginated results with up to 50 variants per page. The method accepts a product ID and pagination parameters (`first` for page size, `afterCursor` for position). Each page includes a cursor for fetching the next page and a flag indicating whether more pages exist.
   *
   * Typically applied when a product has many variants (100+) and loading them all at once would impact performance, memory usage, or user experience. This is ideal for products with extensive variant collections (for example, apparel with hundreds of size/color/style combinations, configurable products with many option permutations) that would be too large or slow to load in a single request.
   *
   * Enables implementing progressive loading patterns like infinite scroll, "Load more" buttons, or lazy loading of additional variants as users browse.
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

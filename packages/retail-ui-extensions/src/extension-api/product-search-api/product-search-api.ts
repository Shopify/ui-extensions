import type {
  MultipleResourceResult,
  PaginatedResult,
  Product,
  ProductVariant,
} from '../types';

export enum ProductSortType {
  RecentlyAdded = 'RECENTLY_ADDED',
  RecentlyAddedAscending = 'RECENTLY_ADDED_ASCENDING',
  AlphabeticalAtoZ = 'ALPHABETICAL_A_TO_Z',
  AlphabeticalZtoA = 'ALPHABETICAL_Z_TO_A',
}

export interface ProductSearchApiContent {
  /** Search for products on the POS device.
   * @param queryString The search term to be used to search for POS products.
   * @param first Specifies the number of results to be returned in this page of products.
   * @param afterCursor Specifies the page cursor. Products after this cursor will be returned.
   * @param sortType Specifies the order in which products should be sorted. When a `queryString` is provided, sortType will not have any effect, as the results will be returned in order by relevance to the `queryString`.
   */
  searchProducts(
    queryString?: string,
    first?: number,
    afterCursor?: string,
    sortType?: ProductSortType,
  ): Promise<PaginatedResult<Product>>;

  /** Fetches a single product's details.
   * @param productId The ID of the product to lookup.
   */
  fetchProductWithId(productId: number): Promise<Product | undefined>;

  /** Fetches multiple products' details.
   * @param productIds Specifies the array of product IDs to lookup.
   */
  fetchProductsWithIds(
    productIds: number[],
  ): Promise<MultipleResourceResult<Product>>;

  /** Fetches a single product variant's details.
   * @param productVariantId The ID of the product variant to lookup.
   */
  fetchProductVariantWithId(
    productVariantId: number,
  ): Promise<ProductVariant | undefined>;

  /** Fetches multiple product variants' details.
   * @param productVariantIds Specifies the array of product variant IDs to lookup.
   */
  fetchProductVariantsWithIds(
    productVariantIds: number[],
  ): Promise<MultipleResourceResult<ProductVariant>>;

  /** Fetches all product variants associated with a product.
   * @param productId The product ID. All variants' details associated with this product ID are returned.
   */
  fetchProductVariantsWithProductId(
    productId: number,
  ): Promise<ProductVariant[]>;
}

/**
 * Access Point of Sale's native product search functionality.
 */
export interface ProductSearchApi {
  productSearch: ProductSearchApiContent;
}
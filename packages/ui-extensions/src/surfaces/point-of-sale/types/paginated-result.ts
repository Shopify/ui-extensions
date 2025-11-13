/**
 * Represents the result of a paginated query. Contains the data items, pagination cursors for navigating pages, and information about whether more results exist.
 */
export interface PaginatedResult<T> {
  /**
   * The items returned from the fetch operation. Contains the actual search results or fetched resources. Commonly used to access the product or variant data returned from search and fetch operations.
   */
  items: T[];

  /**
   * The pagination cursor pointing to the last item in the current result set. This opaque string token can be passed as the `afterCursor` parameter in subsequent search requests to fetch the next page of results. The cursor format varies depending on whether POS is fetching from the remote API or its local database, but this implementation detail doesn't affect usage—simply pass the cursor value as-is to pagination functions. Returns `undefined` when this is the last page of results (when `hasNextPage` is `false`).
   */
  lastCursor?: string;

  /**
   * Whether there is another page of results that can be fetched. Commonly used to determine whether to show "Load More" buttons, pagination controls, or implement infinite scrolling functionality.
   */
  hasNextPage: boolean;
}

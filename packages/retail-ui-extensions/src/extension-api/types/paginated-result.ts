/**
 * Contains a page of fetched results.
 */
export interface PaginatedResult<T> {
  /**
   * The items returned from the fetch.
   */
  items: T[];

  /**
   * The cursor of the last item. This can be used to fetch more results.
   */
  lastCursor?: string;

  /**
   * Whether or not there is another page of results that can be fetched.
   */
  hasNextPage: boolean;
}

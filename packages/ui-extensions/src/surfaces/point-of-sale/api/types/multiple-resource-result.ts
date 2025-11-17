/**
 * Represents the result of a bulk resource lookup operation. Contains successfully found resources and identifiers for resources that were not found.
 */
export interface MultipleResourceResult<T> {
  /**
   * The resources that were fetched using the IDs provided. Contains the successfully found products or variants. Use to access the actual data that was retrieved from the bulk fetch operation.
   */
  fetchedResources: T[];
  /**
   * The IDs for which a resource was not found. Use to handle missing products or variants gracefully, provide user feedback about unavailable items, or implement fallback logic for missing resources.
   */
  idsForResourcesNotFound: number[];
}

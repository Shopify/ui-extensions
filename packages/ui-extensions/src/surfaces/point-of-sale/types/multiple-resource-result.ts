/**
 * Represents the result of a bulk resource lookup operation. Contains successfully found resources and identifiers for resources that weren't found.
 */
export interface MultipleResourceResult<T> {
  /**
   * An array of resources that were successfully fetched using the IDs provided in the request. Each item in this array corresponds to a resource that exists and is accessible on the POS device. The order of items may not match the order of requested IDs. This array is empty when none of the requested IDs were found. Commonly used to access the actual product or variant data retrieved from bulk fetch operations.
   */
  fetchedResources: T[];
  /**
   * An array of numeric IDs for which no matching resource was found on the POS device. Resources may be missing because they don't exist, were deleted, aren't available to this location, or aren't synced to the POS device. This allows distinguishing between successful and failed lookups in a single operation. When all requested resources are found, this array is empty. Commonly used to handle missing products or variants gracefully, provide user feedback about unavailable items ("Product X not found"), log missing data for debugging, or implement fallback logic for missing resources.
   */
  idsForResourcesNotFound: number[];
}

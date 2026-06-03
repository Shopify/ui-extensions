/**
 * Options to configure the Admin page-level loading indicator.
 *
 * @publicDocs
 */
export interface LoadingOptions {
  /**
   * Pass `true` to show the loading indicator, `false` to hide it.
   */
  isLoading?: boolean;
}

/**
 * Sets the Admin page-level loading indicator for hosted app home extensions.
 *
 * Call with `true` to start loading. Call with `false`, or without an argument,
 * to stop loading.
 *
 * @publicDocs
 */
export type LoadingApi = (isLoading?: boolean) => void;

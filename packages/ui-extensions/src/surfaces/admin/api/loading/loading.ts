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
 * Pass `{ isLoading: true }` to show the indicator and `{ isLoading: false }`,
 * or call without arguments, to hide it.
 *
 * @publicDocs
 */
export type LoadingApi = (options?: LoadingOptions) => void;

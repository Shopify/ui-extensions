/**
 * Sets the Admin page-level loading indicator for hosted app home extensions.
 *
 * Call with `true` to start loading. Call with `false`, or without an argument,
 * to stop loading.
 *
 * @publicDocs
 */
export type LoadingApi = (isLoading?: boolean) => void;

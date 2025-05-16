export interface FieldPrefetchApi {
  /**
   * The signal that the extension should listen to for cancellation requests.
   *
   * If the signal is aborted, the extension should cancel any ongoing requests.
   * The signal will be aborted either when the buyer navigates away from the
   * address field or when the debounced query value changes.
   *
   * Pass this signal to any asynchronous operations that need to be cancelled,
   * like `fetch`.
   */
  signal: AbortSignal;

  /**
   * The current state of the form
   *
   */
  target: Target;
}

interface Target {
  /**
   * The current value of the `field` the buyer is interacting with.
   *
   * @example "123 M"
   */
  value: string;
}

export interface FieldPrefetchOutput {
  /**
   * An array of address autocomplete suggestions to show to the buyer.
   *
   * > Note: Only the first five suggestions will be displayed to the buyer.
   */
  data: any;
}

export interface CheckoutApi {
  checkout: CheckoutApiContent;
}

export interface CheckoutApiContent {
  /**
   * Continue the checkout process.
   */
  continue(): Promise<void>;
}

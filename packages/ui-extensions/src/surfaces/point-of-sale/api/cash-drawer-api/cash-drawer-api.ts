/**
 * The `CashDrawerApi` object provides methods for controlling cash drawer hardware. Access these methods through `shopify.cashDrawer` to trigger cash drawer operations.
 * @publicDocs
 */
export interface CashDrawerApiContent {
  /**
   * Opens the connected cash drawer device. The drawer will automatically open if a compatible cash drawer is connected to the POS device. Use for manual cash drawer operations, implementing custom payment workflows, or providing explicit cash drawer access in register management interfaces.
   *
   * The returned promise resolves once the open command has been passed to the native printer bridge. It doesn't confirm that the drawer physically opened, and later hardware failures (such as a jammed drawer) aren't reported. Errors while sending the command reject the promise.
   *
   * @returns Void
   */
  open(): Promise<void>;
}

/**
 * The `CashDrawerApi` object provides methods for controlling cash drawer hardware. Access these methods through `shopify.cashDrawer` to trigger cash drawer operations.
 * @publicDocs
 */
export interface CashDrawerApi {
  /**
   * The `CashDrawerApi` object provides methods for controlling cash drawer hardware. Access these methods through `shopify.cashDrawer` to trigger cash drawer operations.
   */
  cashDrawer: CashDrawerApiContent;
}

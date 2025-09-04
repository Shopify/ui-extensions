/**
 * The Cash Drawer API in POS UI extensions includes select cash drawer functionality.
 */
export interface CashDrawerApi {
  /**
   * Opens the connected cash drawer.
   *
   * @returns Void
   *
   */
  open(): Promise<void>;
}

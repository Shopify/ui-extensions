/**
 * The Cash Drawer API in POS UI extensions includes select cash drawer functionality.
 */
export interface CashDrawerApiContent {
  /**
   * Opens the connected cash drawer.
   *
   * @returns Void
   *
   */
  open(): Promise<void>;
}

/**
 * Interface for the Cash Drawer API
 */
export interface CashDrawerApi {
  cashDrawer: CashDrawerApiContent;
}

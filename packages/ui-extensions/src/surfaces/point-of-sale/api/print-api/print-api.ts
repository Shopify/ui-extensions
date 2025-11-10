/**
 * Access the print API for printing functionality
 */
export interface PrintApiContent {
  /**
   * Triggers the native print dialog for the specified document source. The `print()` method accepts either:
   * • A relative path (for example, `/print-receipt`) that will be appended to your app's [`application_url`](/docs/apps/build/cli-for-apps/app-configuration) configured in your app settings.
   * • A full URL to your app's backend (for example, `https://myapp.com/api/print/receipt/123`) that returns the document to print.
   *
   * The method returns a promise that resolves when the document content has loaded and the native print dialog appears on screen. The actual printing happens when the user confirms in the print dialog—this method doesn't wait for print completion. The document at the source URL should return printable HTML content.
   *
   * Commonly used for printing custom receipts, shipping labels, packing slips, invoices, or reports with custom formatting. Print failures (network errors, invalid URLs, or unloadable content) reject the promise with an error.
   *
   * @param src the source URL of the content to print.
   * @returns Promise<void> that resolves when content is ready and native print dialog appears.
   */
  print(src: string): Promise<void>;
}

/**
 * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
 */
export interface PrintApi {
  /**
   * Provides access to print functionality for triggering the native print dialog with custom documents.
   */
  print: PrintApiContent;
}

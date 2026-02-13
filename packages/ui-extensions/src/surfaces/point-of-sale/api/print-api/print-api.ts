/** The target destination for printing. */
export type PrintDestination = 'system' | 'receipt';

/**
 * Options for configuring print behavior.
 * @example
 * // Print to system dialog (default)
 * shopify.print.print('https://example.com/invoice');
 *
 * // Print to receipt printer (POS only, requires API version 2026-04+)
 * shopify.print.print('https://example.com/receipt', { destination: 'receipt' });
 */
export interface PrintOptions {
  /**
   * The print destination.
   * - `'system'` opens the OS print dialog (default, works on all surfaces)
   * - `'receipt'` sends HTML content to the connected receipt printer (POS only, requires API version 2026-04+)
   * @defaultValue 'system'
   */
  destination?: PrintDestination;
}

/**
 * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
 */
export interface PrintApiContent {
  /**
   * Triggers a print dialog for the specified document source. The `print()` method accepts either:
   *
   * • A relative path that will be appended to your app's [`application_url`](/docs/apps/build/cli-for-apps/app-configuration)
   *
   * • A full URL to your app's backend that will be used to return the document to print
   *
   * Returns a promise that resolves when content is ready and the native print dialog appears. Use for printing custom documents, receipts, labels, or reports.
   *
   * @param src the source URL of the content to print.
   * @param options optional configuration for print behavior, such as selecting the print destination.
   * @returns Promise<void> that resolves when content is ready and native print dialog appears.
   */
  print(src: string, options?: PrintOptions): Promise<void>;
}

/**
 * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
 */
export interface PrintApi {
  /**
   * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
   */
  print: PrintApiContent;
}

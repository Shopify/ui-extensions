/**
 * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
 *
 * @deprecated Use `shopify.printing` instead. The Printing API supersedes `shopify.print`, adding hardware printer discovery via `getPrinters()` and direct-to-printer printing via the `printer` option on `print()`.
 * @publicDocs
 */
export interface PrintApiContent {
  /**
   * Triggers a print dialog for the specified document source. The `print()` method accepts either:
   *
   * • A relative path that will be appended to your app's [`application_url`](/docs/apps/build/cli-for-apps/app-configuration)
   *
   * • A full URL to your app's backend that will be used to return the document to print. For API version 2026-07 and later, the URL must be an `https:` URL on the same origin as your app's `application_url` (Shopify-developed apps can also use `https://cdn.shopify.com`). Earlier API versions accept any `http:` or `https:` URL.
   *
   * On Android, a PDF source is downloaded without showing a print dialog. For API version 2026-07 and later, the promise resolves without printing; on earlier API versions the promise rejects instead once POS has handled the file, and a call made while the file is still loading can remain unsettled.
   *
   * A new print job replaces a previous job that's still being prepared. On API version 2026-07 and later, the replaced job's promise rejects; on earlier API versions, the replaced call can remain unsettled. Content preparation is asynchronous, so jobs aren't necessarily replaced in the order `print()` was called. Serialize `print()` calls when print order matters.
   *
   * Use for printing custom documents, receipts, labels, or reports.
   *
   * @param src the source URL of the content to print.
   * @returns Promise<void> that resolves when content is ready and the native print dialog appears. On Android, a PDF source resolves after the file downloads, without a print dialog (API version 2026-07 and later; earlier API versions reject instead).
   */
  print(src: string): Promise<void>;
}

/**
 * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
 *
 * @deprecated Use `shopify.printing` instead. The Printing API supersedes `shopify.print`, adding hardware printer discovery via `getPrinters()` and direct-to-printer printing via the `printer` option on `print()`.
 * @publicDocs
 */
export interface PrintApi {
  /**
   * The `PrintApi` object provides methods for triggering document printing. Access these methods through `shopify.print` to initiate print operations with various document types.
   */
  print: PrintApiContent;
}

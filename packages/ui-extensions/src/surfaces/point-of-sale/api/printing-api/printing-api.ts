/**
 * The Printing API provides methods for triggering document printing and
 * discovering available receipt printers. Content is fetched from a URL
 * and can be sent to a specific printer or to the system print dialog.
 *
 * Accessed via `shopify.printing`, aligning with the web platform's
 * `navigator.printing` namespace from the WICG Web Printing proposal.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/print | Window.print()}
 *   for the web platform equivalent (no parameters, prints current document).
 *   This API extends the concept with URL-based content and printer selection.
 * @see {@link https://github.com/WICG/web-printing | WICG Web Printing} for the
 *   emerging web standard for printer enumeration and job submission. This API
 *   aligns with WICG's instance-level printer selection model.
 * @publicDocs
 */
export interface PrintingApiContent {
  /**
   * Returns the list of receipt printers currently available to the
   * device. Each printer includes its connection status and a reference
   * that can be passed to `print()`.
   *
   * When no receipt printers are available, returns an empty array.
   * The system print dialog is not included in this list — it is the
   * default behavior when no `printer` option is provided to `print()`.
   *
   * @see {@link https://github.com/WICG/web-printing | WICG Web Printing}
   *   for the emerging web standard this aligns with.
   * @returns A promise that resolves with the list of available receipt printers.
   */
  getPrinters(): Promise<Printer[]>;

  /**
   * Triggers a print operation for the specified document source.
   *
   * When called without a `printer` option, opens the device's system
   * print dialog (e.g., AirPrint on iOS, Android print service). When
   * a `printer` reference is provided (from `getPrinters()`), sends
   * the content directly to that printer without showing a dialog.
   *
   * The `src` parameter accepts either:
   * - A relative path that will be appended to your app's [`application_url`](/docs/apps/build/cli-for-apps/app-configuration)
   * - A full URL to your app's backend
   *
   * The content at the URL is fetched with the extension's session token
   * for authentication. HTML, PDFs, and images are supported content types.
   * PDFs can only be printed via the system print dialog: selecting a
   * `printer` with a PDF `src` throws, because receipt printers render HTML
   * and image content only.
   *
   * @param src the source URL of the content to print.
   * @param options optional configuration for the print operation.
   * @returns A promise that resolves when the print job has been
   *   successfully sent. For receipt printers, this means the rasterized
   *   content has been dispatched — it does not wait for physical printing
   *   to complete. For the system print dialog, this resolves when the
   *   content is ready and the dialog appears.
   * @throws {Error} when the content cannot be fetched from `src`.
   * @throws {Error} when the specified `printer` is not connected.
   * @throws {Error} when `src` is a PDF and a `printer` is selected, since
   *   receipt printers render HTML and image content only.
   */
  print(src: string, options?: PrintOptions): Promise<void>;
}

/**
 * Options for `shopify.printing.print()`.
 * @publicDocs
 */
export interface PrintOptions {
  /**
   * A printer reference obtained from `getPrinters()`. When provided,
   * the print job is sent directly to this printer without showing
   * a system print dialog.
   *
   * When omitted, the system print dialog is shown, allowing the
   * user to select a printer and configure print settings.
   */
  printer?: Printer;
}

/**
 * A receipt printer available to the device, as returned by `shopify.printing.getPrinters()`.
 * @publicDocs
 */
export interface Printer {
  /** Unique identifier for this printer. */
  id: string;

  /** Human-readable display name (e.g., "Star TSP143" or "Front Counter Printer"). */
  name: string;

  /** Whether the printer is currently able to accept print jobs. */
  connected: boolean;
}

/**
 * The `PrintingApi` object provides methods for triggering document printing
 * and discovering available receipt printers. Access these methods through
 * `shopify.printing`.
 * @publicDocs
 */
export interface PrintingApi {
  printing: PrintingApiContent;
}

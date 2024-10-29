/**
 * Access the print API for printing functionality
 */
export interface PrintApiContent {
  /**
   * Trigger a print dialog.
   * @param src the source URL of the content to print. This URL must be a path of the app backend. Valid document types are text, HTML, image, and PDF.
   * @returns Promise<void> that resolves when content is ready and native print dialog appears.
   */
  print(src: string): Promise<void>;
}

/**
 * Interface for printing
 */
export interface PrintApi {
  print: PrintApiContent;
}

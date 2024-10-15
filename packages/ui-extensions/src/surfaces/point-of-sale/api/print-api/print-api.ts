/**
 * Access the print API for printing functionality
 */
export interface PrintApiContent {
  /** Trigger a print dialog
   * @param src the source to print. Omit to use the current PrintPreview contents.
   */
  print(src?: string): void;
}

/**
 * Interface for printing
 */
export interface PrintApi {
  print: PrintApiContent;
}

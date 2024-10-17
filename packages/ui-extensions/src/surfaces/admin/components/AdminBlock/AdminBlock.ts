export interface AdminBlockProps {
  /**
   * The title to display at the top of the app block. If not provided, the name of the extension will be used. Titles longer than 40 characters will be truncated.
   */
  title?: string;

  /**
   * The summary to display when the app block is collapsed. Summary longer than 30 characters will be truncated.
   */
  collapsedSummary?: string;
}

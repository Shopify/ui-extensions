/**
 * Represents an error or warning generated during extension execution. Extends the standard JavaScript Error interface with severity level classification.
 */
interface ExtensionError extends Error {
  /**
   * The severity level of this error:
   * - `'error'`: A critical error that prevents the extension from completing successfully. Errors typically block the user workflow and require resolution before proceeding.
   * - `'warning'`: A non-critical issue that doesn't prevent extension execution but indicates a problem or unexpected condition. Warnings allow the workflow to continue but should be logged or displayed to users.
   */
  level: 'error' | 'warning';
  /**
   * The human-readable error message describing what went wrong. This message should be clear and actionable, helping merchants understand the issue and how to resolve it (for example, "Product not found", "Invalid discount code", "Insufficient inventory"). The message may be displayed to users in the POS interface depending on the error severity and context.
   */
  message: string;
}

/**
 * Base output structure that extensions can return to communicate errors and warnings back to the POS system. Extensions populate this interface when they encounter issues during execution.
 */
export interface BaseOutput {
  /**
   * An array of errors or warnings encountered during extension execution. Each error includes a severity level (`'error'` or `'warning'`) and a descriptive message. Multiple errors can be reported simultaneously. Returns `undefined` or empty array when the extension executes successfully without issues. Critical errors may prevent transaction completion, while warnings allow the transaction to proceed but indicate issues that should be addressed.
   */
  errors?: ExtensionError[];
}

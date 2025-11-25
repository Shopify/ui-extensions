/**
 * Represents an error or warning that occurred during extension execution.
 */
interface ExtensionError extends Error {
  /**
   * The severity level of this error. Use `'error'` for critical issues that prevent the extension from completing successfully and block the user workflow. Use `'warning'` for non-critical issues that don't prevent execution but indicate a problem that should be logged or displayed to users.
   */
  level: 'error' | 'warning';
  /**
   * A human-readable error message describing what went wrong. This message should be clear and actionable, helping merchants understand the issue and how to resolve it (for example, `"Product not found"`, `"Invalid discount code"`, `"Insufficient inventory"`). The message may be displayed to users in the POS interface depending on the error severity and context.
   */
  message: string;
}

/**
 * Base output structure that extensions return to communicate errors and warnings back to the POS system. Extensions populate this interface when they encounter issues during execution.
 */
export interface BaseIntent {
  /**
   * An array of errors or warnings encountered during extension execution. Each error includes a severity level (`'error'` or `'warning'`) and a descriptive message. Multiple errors can be reported simultaneously. Returns `undefined` or an empty array when the extension executes successfully without issues. Critical errors may prevent workflow completion, while warnings allow the workflow to proceed but indicate issues that should be addressed.
   */
  errors?: ExtensionError[];
}

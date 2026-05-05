/**
 * Options for configuring toast notification behavior and appearance.
 * @publicDocs
 */
export interface ToastOptions {
  /**
   * The duration in milliseconds to display the toast before automatically dismissing. If not specified, a default duration is used.
   */
  duration?: number;

  /**
   * Whether to display the toast as an error notification. Use for error messages or failed operations.
   * @defaultValue false
   */
  isError?: boolean;

  /**
   * The label for an optional action button displayed in the toast. When provided, an action button appears that the user can click.
   */
  action?: string;

  /**
   * Callback function triggered when the user clicks the action button. Only called if `action` is provided.
   */
  onAction?: () => void;

  /**
   * Callback function triggered when the toast is dismissed, either automatically after the duration expires or manually by the user.
   */
  onDismiss?: () => void;
}

/**
 * The `ToastApi` object provides methods for displaying temporary notification messages. Access these methods through `shopify.toast` to show user feedback and status updates.
 * @publicDocs
 */
export interface ToastApi {
  /**
   * Displays a toast notification with the specified message. The toast appears as a temporary overlay that automatically dismisses after the specified duration. Use for providing immediate user feedback, confirming actions, or communicating status updates without interrupting the user's workflow.
   *
   * @param message - The text content to display in the toast notification.
   * @param options - Optional configuration for the toast behavior and appearance.
   */
  show: (message: string, options?: ToastOptions) => void;

  /**
   * Dismisses any currently visible toast notification. Use this to programmatically hide a toast before its duration expires.
   */
  hide: () => void;
}

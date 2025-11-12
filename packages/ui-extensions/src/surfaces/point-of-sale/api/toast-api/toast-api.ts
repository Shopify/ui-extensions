/**
 * Specifies configuration options for displaying toast notifications. Controls the duration and display behavior of temporary notification messages.
 */
export interface ShowToastOptions {
  /**
   * The duration in milliseconds that the toast message remains visible before automatically dismissing. If not specified, the toast uses the default system duration (typically 3-5 seconds depending on the platform).
   *
   * Shorter durations (1000-2000ms) work well for simple confirmations like "Item added" or "Saved". Longer durations (5000-7000ms) provide adequate reading time for important messages or multi-sentence notifications. Very short durations (< 1000ms) may not give users enough time to read the message. The toast dismisses automatically after the specified duration, but users may also manually dismiss it if the system supports swipe-to-dismiss gestures.
   */
  duration?: number;
}

export interface ToastApiContent {
  /**
   * Displays a toast notification with the specified text content. The message appears as a temporary, non-blocking overlay (typically at the top or bottom of the screen) that automatically dismisses after the specified duration. The toast doesn't interrupt the user's workflow—users can continue interacting with the POS while the toast is visible. Toast messages should be brief and scannable (1-2 short sentences maximum) since they disappear automatically.
   *
   * Commonly used for providing immediate user feedback ("Product added to cart"), confirming actions ("Changes saved"), displaying success messages ("Order completed"), or communicating status updates ("Syncing inventory") without requiring user acknowledgment. Multiple toasts may queue or stack depending on the platform implementation.
   *
   * @param content The text content to display.
   * @param options An object containing ShowToastOptions.
   */
  show: (content: string, options?: ShowToastOptions) => void;
}

/**
 * The `ToastApi` object provides methods for displaying temporary notification messages. Access these methods through `shopify.toast` to show user feedback and status updates.
 */
export interface ToastApi {
  toast: ToastApiContent;
}

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

/** @publicDocs */
export interface ToastApiContent {
  /**
   * Displays a toast notification with the specified text content. The message appears as a temporary overlay that automatically dismisses after the specified duration. Use for providing immediate user feedback, confirming actions, or communicating status updates without interrupting the user's workflow.
   *
   * @param content The text content to display.
   * @param options An object containing ShowToastOptions.
   */
  show: (content: string, options?: ShowToastOptions) => void;
}

/**
 * The `ToastApi` object provides methods for displaying temporary notification messages. Access these methods through `api.toast` to show user feedback and status updates.
 */
export interface ToastApi {
  toast: ToastApiContent;
}

export interface ToastApiContent {
  /**
   * Show a toast.
   * @param content The text content to display.
   * @param duration The duration of the toast in ms. Defaults to 5000.
   */
  show: (content: string, duration?: number) => void;
}

/**
 * Show a toast.
 */
export interface ToastApi {
  toast: ToastApiContent;
}

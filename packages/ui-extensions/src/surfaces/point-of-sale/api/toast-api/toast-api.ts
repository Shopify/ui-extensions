/** @publicDocs */
export interface ShowToastOptions {
  duration?: number;
}

/** @publicDocs */
export interface ToastApiContent {
  /**
   * Show a toast.
   * @param content The text content to display.
   * @param options An object containing ShowToastOptions.
   */
  show: (content: string, options?: ShowToastOptions) => void;
}

/** @publicDocs */
export interface ToastApi {
  toast: ToastApiContent;
}

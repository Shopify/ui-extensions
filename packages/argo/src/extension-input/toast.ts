export interface ShowToastPayload extends ShowToastOptions {
  content: string;
}

export interface ShowToastOptions {
  error?: boolean;
}

export interface ShowToast {
  (content: string, options?: ShowToastOptions): void;
}

export interface ToastInput {
  toast: {
    show: ShowToast;
  };
}

export function isToastInput(input: any): input is ToastInput {
  return 'toast' in input;
}

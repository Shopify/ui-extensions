export interface ShowToastPayload extends ShowToastOptions {
  content: string;
}

export interface ShowToastOptions {
  error?: boolean;
}

export interface ShowToast {
  (content: string, options?: ShowToastOptions): void;
}

export interface ToastApi {
  toast: {
    show: ShowToast;
  };
}

export function isToastApi(api: any): api is ToastApi {
  return 'toast' in api;
}

interface ShowToastOptions {
  error?: boolean;
}

export interface ToastPayload {
  show(content: string, options?: ShowToastOptions): void;
}

export interface ToastApi {
  toast: ToastPayload;
}

export function isToastApi(api: any): api is ToastApi {
  return 'toast' in api;
}

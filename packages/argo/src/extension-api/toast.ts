export interface ShowToastOptions {
  error?: boolean;
}

export interface Toast {
  show(content: string, options?: ShowToastOptions): void;
}

export interface ToastApi {
  toast: Toast;
}

export function isToastApi(api: any): api is ToastApi {
  return 'toast' in api;
}

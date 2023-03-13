import type {CartApi} from './cart-api';
import type {LocaleApi} from './locale-api';
import type {SessionApi} from './session-api';
import type {ToastApi} from './toast-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  ToastApi &
  SessionApi;

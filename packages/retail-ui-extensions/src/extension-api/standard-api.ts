import type {CartApi} from './cart-api';
import type {LocaleApi} from './locale-api';
import type {SessionApi} from './session-api';
import type {ToastApi} from './toast-api';
import type {DeviceApi} from './device-api';
import type {ProductSearchApi} from './product-search-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  ToastApi &
  SessionApi &
  ProductSearchApi &
  DeviceApi;

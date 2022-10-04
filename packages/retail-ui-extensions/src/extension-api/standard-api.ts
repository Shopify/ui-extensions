import type {CartApi} from './cart-api';
import type {LocaleApi} from './locale-api';
import type {NavigationApi} from './navigation-api';
import type {SessionApi} from './session-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  NavigationApi &
  SessionApi;

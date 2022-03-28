import type {CartApi} from './CartApi';
import type {LocaleApi} from './LocaleApi';
import type {NavigationApi} from './NavigationApi';
import type {SessionTokenApi} from './SessionTokenApi';

export type {LocaleApi} from './LocaleApi';
export {isLocaleApi} from './LocaleApi';

export type {SessionTokenApi} from './SessionTokenApi';
export {isSessionTokenApi} from './SessionTokenApi';

export type {CartApiContent, DiscountType} from './CartApi/CartApiContent';
export type {CartApi} from './CartApi';
export {isCartApi} from './CartApi';

export type {Cart, LineItem, Customer, Discount, CustomSale} from './Models';

export type {NavigationApi} from './NavigationApi';
export {isNavigationApi} from './NavigationApi';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  NavigationApi &
  SessionTokenApi;

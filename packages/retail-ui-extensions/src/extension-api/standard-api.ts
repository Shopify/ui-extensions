import type {CartApi} from './cart-api';
import type {LocaleApi} from './locale-api';
import {NavigationApi} from './navigation-api';
import type {SessionApi} from './session-api';
import {SmartGridApi} from './smartgrid-api';
import type {ToastApi} from './toast-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  ToastApi &
  SessionApi;

export type SmartGridTileApi = StandardApi<'pos.home.tile.render'> &
  SmartGridApi;

export type SmartGridModalApi = StandardApi<'pos.home.modal.render'> &
  NavigationApi;

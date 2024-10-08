import {ConnectivityApi} from '../connectivity-api/connectivity-api';
import {DeviceApi} from '../device-api/device-api';
import {LocaleApi} from '../locale-api/locale-api';
import {SessionApi} from '../session-api/session-api';
import {ToastApi} from '../toast-api/toast-api';
import {ProductSearchApi} from '../product-search-api/product-search-api';
import {PrinterApi} from '../printer-api/printer-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  ToastApi &
  SessionApi &
  PrinterApi &
  ProductSearchApi &
  DeviceApi &
  ConnectivityApi;

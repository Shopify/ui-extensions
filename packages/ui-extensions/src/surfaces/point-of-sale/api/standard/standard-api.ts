import type {ConnectivityApi} from '../connectivity-api/connectivity-api';
import type {DeviceApi} from '../device-api/device-api';
import type {LocaleApi} from '../locale-api/locale-api';
import type {SessionApi} from '../session-api/session-api';
import type {ToastApi} from '../toast-api/toast-api';
import type {ProductSearchApi} from '../product-search-api/product-search-api';
import {StorageApi} from '../storage-api/storage-api';

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  ToastApi &
  SessionApi &
  ProductSearchApi &
  DeviceApi &
  StorageApi &
  ConnectivityApi;

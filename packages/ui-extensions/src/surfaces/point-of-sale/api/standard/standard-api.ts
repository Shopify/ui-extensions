import {ConnectivityApi} from '../connectivity-api/connectivity-api';
import {DeviceApi} from '../device-api/device-api';
import {LocaleApi} from '../locale-api/locale-api';
import {SessionApi} from '../session-api/session-api';
import {ToastApi} from '../toast-api/toast-api';
import {ProductSearchApi} from '../product-search-api/product-search-api';
import {PrintApi} from '../print-api/print-api';
import {StorageApi} from '../storage-api/storage-api';
import {PinPadApi} from '../pin-pad-api';
import type {I18n} from '../../../../api';

/**
 * The base API available to all POS extension targets, providing access to common functionality like locale, toast notifications, session information, printing, product search, device info, connectivity status, storage, and PIN pad features.
 * @publicDocs
 */
export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
  i18n: I18n;
} & LocaleApi &
  ToastApi &
  SessionApi &
  PrintApi &
  ProductSearchApi &
  DeviceApi &
  ConnectivityApi &
  StorageApi &
  PinPadApi;

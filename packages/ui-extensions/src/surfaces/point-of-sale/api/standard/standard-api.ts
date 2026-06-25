import {CameraApi} from '../camera-api/camera-api';
import {ConnectivityApi} from '../connectivity-api/connectivity-api';
import {DeviceApi} from '../device-api/device-api';
import {ExtensionApi} from '../extension-api/extension-api';
import {LocaleApi} from '../locale-api/locale-api';
import {SessionApi} from '../session-api/session-api';
import {ToastApi} from '../toast-api/toast-api';
import {ProductSearchApi} from '../product-search-api/product-search-api';
// eslint-disable-next-line import/no-deprecated
import {PrintApi} from '../print-api/print-api';
import {PrintingApi} from '../printing-api/printing-api';
import {StorageApi} from '../storage-api/storage-api';
import {PinPadApi} from '../pin-pad-api';
import type {I18n} from '../../../../api';

/**
 * @publicDocs
 */
export type StandardApi<T> = {[key: string]: any} & {
  /**
   * @deprecated Use `extension.target` instead.
   */
  extensionPoint: T;
  i18n: I18n;
} & ExtensionApi<T> &
  LocaleApi &
  ToastApi &
  SessionApi &
  // eslint-disable-next-line import/no-deprecated
  PrintApi &
  PrintingApi &
  ProductSearchApi &
  DeviceApi &
  ConnectivityApi &
  StorageApi &
  PinPadApi &
  CameraApi;

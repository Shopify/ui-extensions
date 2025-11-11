import {ScannerApi} from '../scanner-api/scanner-api';
import {StandardApi} from '../standard/standard-api';
import {CameraApi} from '../camera-api/camera-api';

export type ActionTargetApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & StandardApi<T> &
  ScannerApi &
  CameraApi;

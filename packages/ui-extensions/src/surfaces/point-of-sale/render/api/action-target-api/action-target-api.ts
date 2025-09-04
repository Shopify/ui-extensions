import {ScannerApi} from '../scanner-api/scanner-api';
import {NavigationApi} from '../navigation-api/navigation-api';
import {StandardApi} from '../standard/standard-api';
import {PinPadApi} from '../pin-pad-api/pin-pad-api';

export type ActionTargetApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & StandardApi<T> &
  ScannerApi &
  NavigationApi &
  PinPadApi;

import {ScannerApi} from '../scanner-api/scanner-api';
import {StandardApi} from '../standard/standard-api';

/**
 * The API available to modal extension targets, extending StandardApi with scanner functionality for barcode and QR code scanning capabilities.
 * @publicDocs
 */
export type ActionTargetApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & StandardApi<T> &
  ScannerApi;

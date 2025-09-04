import type {ReadonlySignalLike} from '../../../../shared';

/** The scanner source the POS device supports. */
export type ScannerSource = 'camera' | 'external' | 'embedded';

export interface ScannerSubscriptionResult {
  /** The string data from the last scanner event received. */
  data?: string;
  /** The scanning source from which the scan event came. */
  source?: ScannerSource;
}

export interface ScannerSources {
  /**
   * The current available scanner sources.
   * The `value` property provides the current sources, and `subscribe` allows listening to changes.
   */
  current: ReadonlySignalLike<ScannerSource[]>;
}

export interface ScannerData {
  /**
   * The current scan data.
   * The `value` property provides the current scan result, and `subscribe` allows listening to new scans.
   */
  current: ReadonlySignalLike<ScannerSubscriptionResult>;
}

export interface ScannerApiContent {
  /**
   * Provides read-only access to scanner data and allows subscribing to new scan events.
   */
  scannerData: ScannerData;
  /**
   * Provides read-only access to the available scanner sources on the POS device.
   */
  sources: ScannerSources;
}

export interface ScannerApi {
  scanner: ScannerApiContent;
}

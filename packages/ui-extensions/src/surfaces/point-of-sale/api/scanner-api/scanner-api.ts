import type {ReadonlySignalLike} from '../../../../shared';

/** The scanner source the POS device supports. */
export type ScannerSource = 'camera' | 'external' | 'embedded';

/**
 * Represents the data from a scanner event. Contains the scanned string data and the hardware source that captured the scan.
 */
export interface ScannerSubscriptionResult {
  /**
   * The string data from the last scanner event received. Contains the decoded content from the scanned barcode, QR code, or other machine-readable format. The format and content depend on what was scanned—product barcodes return product identifiers (UPC, EAN), QR codes return their encoded text or URL, and other formats return their respective data encodings. The string is already decoded and ready to use (no additional parsing of barcode formats needed). Returns `undefined` when no scan has occurred yet or when the scan data isn't available.
   *
   * Commonly used to look up products by barcode, process QR code data, implement scan-to-add-to-cart workflows, or trigger actions based on scanned content.
   */
  data?: string;
  /**
   * The scanning hardware source from which the scan event originated. Identifies which scanner captured the data:
   * • **`'camera'`** - Device camera used for scanning through the camera interface. Available on most mobile POS devices (smartphones, tablets). Typically requires the user to position the camera over the barcode/QR code and capture an image.
   * • **`'external'`** - External scanner hardware connected to the POS device using USB, Bluetooth, or other connection methods. Includes handheld barcode scanners, ring scanners, and dedicated scanning devices. These are typically faster and more reliable than camera scanning for high-volume scanning.
   * • **`'embedded'`** - Built-in scanning hardware integrated directly into the POS device. Found in specialized POS terminals and all-in-one devices with dedicated scanning components. These scanners are always available and don't require additional setup.
   *
   * Returns `undefined` when the scan source can't be determined or when no scan has occurred yet.
   *
   * The source information can be used to implement source-specific logic (different behaviors for camera vs hardware scanners), provide user feedback about which scanning method was used, or track scanning method preferences for analytics.
   */
  source?: ScannerSource;
}

/**
 * Represents the available scanner hardware sources on the device. Provides reactive access to the list of scanners that can be used for scanning operations.
 */
export interface ScannerSources {
  /**
   * Provides read-only access to the array of currently available scanner sources with subscription support for real-time updates. The `value` property contains an array of scanner types currently accessible on this device (for example, `['camera', 'external']` if both camera and an external scanner are available). The `subscribe` method allows listening for changes in scanner availability, which can occur when hardware scanners are connected/disconnected or when permissions change. The array is empty when no scanners are available.
   *
   * Commonly used to monitor which scanning methods are available, show/hide scanner-related UI based on availability, or select the preferred scanner for scanning operations.
   */
  current: ReadonlySignalLike<ScannerSource[]>;
}

/**
 * Represents the scanner interface for accessing scan events and subscription management. Provides real-time access to scanned data through a reactive signal pattern.
 */
export interface ScannerData {
  /**
   * Provides read-only access to the current scan data with subscription support for real-time updates. The `value` property contains the most recent scan result including the scanned data string and the source that captured it. The `subscribe` method allows listening for new scan events as they occur.
   *
   * This enables reactive scan handling where your extension responds immediately to barcode or QR code scans from any available scanner source (camera, external, embedded). The data updates each time a new scan is captured, replacing the previous scan result. Subscriptions fire only when new scans occur, not continuously.
   */
  current: ReadonlySignalLike<ScannerSubscriptionResult>;
}

export interface ScannerApiContent {
  /**
   * Provides access to current scan data and subscription capabilities for receiving real-time scan events. The `scannerData` object contains the most recent scan result and allows subscribing to future scans. Commonly used to receive and process barcode or QR code data as it's scanned, implementing scan-based product lookup, adding items to cart using scan, or triggering workflows based on scanned codes.
   */
  scannerData: ScannerData;
  /**
   * Provides access to information about available scanner hardware sources on the device. The `sources` object contains an array of currently available scanning methods and allows subscribing to availability changes. Commonly used to check which scanner types are available (camera, external hardware, embedded), adapt UI based on scanner availability (showing/hiding scan buttons), or selecting the preferred scanner source for operations.
   */
  sources: ScannerSources;
}

/**
 * The `ScannerApi` object provides access to scanning functionality and scanner source information. Access these properties through `shopify.scanner` to monitor scan events and available scanner sources.
 */
export interface ScannerApi {
  scanner: ScannerApiContent;
}

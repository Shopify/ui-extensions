import type {RemoteSubscribable} from '@remote-ui/async-subscription';

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
   * The scanning source from which the scan event came. Returns one of the following scanner types:
   *
   * - `'camera'` - Device camera for scanning through the camera interface (available on most mobile POS devices)
   * - `'external'` - External scanner hardware connected using USB, Bluetooth, or other methods (handheld scanners, dedicated devices)
   * - `'embedded'` - Built-in scanning hardware integrated into the POS device (specialized terminals with integrated scanning)
   *
   * Returns `undefined` when no scan source is available. Use to implement source-specific logic or provide feedback about scanning method.
   */
  source?: ScannerSource;
}

export interface ScannerApiContent {
  /**
   * Subscribe to scan events to receive barcode and QR code data when scanned. Supports one subscription at a time. To enable multiple subscriptions, use `makeStatefulSubscribable` on the `RemoteSubscribable` object. Using `makeStatefulSubscribable` or related hooks counts as an active subscription. Use for receiving real-time scan results.
   */
  scannerDataSubscribable: RemoteSubscribable<ScannerSubscriptionResult>;
  /**
   * Subscribe to changes in available scanner sources on the device. Supports one subscription at a time. To enable multiple subscriptions, use `makeStatefulSubscribable` on the `RemoteSubscribable` object. Using `makeStatefulSubscribable` or related hooks counts as an active subscription. Use to monitor which scanners are available (camera, external, or embedded).
   */
  scannerSourcesSubscribable: RemoteSubscribable<ScannerSource[]>;
}

/**
 * The `ScannerApi` object provides access to scanning functionality and scanner source information. Access these properties through `api.scanner` to monitor scan events and available scanner sources.
 */
export interface ScannerApi {
  scanner: ScannerApiContent;
}

import type {ScannerSource} from '../api/scanner-api/scanner-api';

/**
 * Dispatched once for each successful scan captured by a camera, external,
 * or embedded scanner. Every event carries a decoded `data` value and its
 * `source`; no event is dispatched for initial or empty scanner state.
 *
 * The event is delivered only after POS has finished handling the scan
 * itself.
 *
 * @example
 * ```ts
 * shopify.addEventListener('scan', (event) => {
 *   handleScan(event.data, event.source);
 * });
 * ```
 * @publicDocs
 */
export interface ScanEvent {
  /** The event name. */
  readonly type: 'scan';
  /**
   * The decoded string captured by the scan. Contains the scanned barcode, QR code, or other scannable data. Always present: an event is only dispatched for a successful scan.
   */
  readonly data: string;
  /**
   * The scanner source that captured the scan. One of the following scanner types:
   *
   * • `'camera'` - Built-in device camera used for scanning
   * • `'external'` - External scanner hardware connected to the device
   * • `'embedded'` - Embedded scanner hardware built into the device
   */
  readonly source: ScannerSource;
}

import type {ScannerSource} from '../api/scanner-api/scanner-api';

/**
 * Dispatched when the POS device captures a scan from any scanner source
 * (camera, external, or embedded hardware).
 *
 * @example
 * ```ts
 * shopify.addEventListener('scan', (event) => {
 *   console.log(event.data, event.source);
 * });
 * ```
 * @publicDocs
 */
export interface ScanEvent extends Event {
  /**
   * The decoded string captured by the scanner. Contains the scanned barcode, QR code, or other scannable data.
   */
  readonly data: string;
  /**
   * The scanner source that captured this scan.
   */
  readonly source: ScannerSource;
}

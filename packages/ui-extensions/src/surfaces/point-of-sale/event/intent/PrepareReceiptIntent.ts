import {BaseIntent} from './BaseIntent';

export type PrepareReceiptAdditionalLineType =
  | 'Header'
  | 'Text'
  | 'QRCode'
  | 'Error';

/**
 * Add additional lines to the receipt
 *
 * Examples:
 * - Header:
 *  - type: "Header"
 *  - title: "Custom Header"
 * - Text
 *  - type: "Text"
 *  - title: "Custom Text"
 * - QRCode
 *  - type: "QRCode"
 *  - value: "https://example.com"
 * - Error
 *  - type: "Error"
 *  - title: "Custom message"
 *  - value: "Custom description"
 */
export interface PrepareReceiptAdditionalLine {
  data: {
    type: PrepareReceiptAdditionalLineType;
    title: string;
    value: string;
  };
}

export interface PrepareReceiptIntent extends BaseIntent {
  addAdditionalReceiptLines?: PrepareReceiptAdditionalLine[];
}

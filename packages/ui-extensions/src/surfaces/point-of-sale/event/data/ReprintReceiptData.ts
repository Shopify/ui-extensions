import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

/**
 * Defines the data structure for receipt reprint requests.
 */
export interface ReprintReceiptData extends BaseTransactionComplete {
  /**
   * The transaction type identifier, always 'Sale' for sale transactions.
   */
  transactionType: 'Reprint';
  /**
   * An array of line items included in the sale transaction.
   */
  lineItems: LineItem[];
}

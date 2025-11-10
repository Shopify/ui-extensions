import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {OrderLineItem} from '../../types/order';

/**
 * Defines the data structure for receipt reprint requests. Contains information from the original completed transaction that is being reprinted, allowing receipt extensions to regenerate receipts for historical transactions.
 */
export interface ReprintReceiptData extends BaseTransactionComplete {
  /**
   * The transaction type identifier, always `'Reprint'` for receipt reprint operations. This discriminator indicates that this isn't a new transaction but rather a reprint of an existing transaction's receipt. No new order is created, no inventory changes occur, and no payment is processed—this only regenerates the receipt document.
   */
  transactionType: 'Reprint';
  /**
   * An array of order line items from the original transaction being reprinted. These are `OrderLineItem` objects (not regular `LineItem` objects) which include additional order-specific data like `currentQuantity` (remaining after refunds) and `refunds` (refund history). This allows receipt reprints to accurately reflect the transaction's current state, showing which items were refunded since the original receipt was printed. The line items represent the historical data from when the transaction was originally completed, updated with any subsequent refunds or modifications.
   */
  lineItems: OrderLineItem[];
}

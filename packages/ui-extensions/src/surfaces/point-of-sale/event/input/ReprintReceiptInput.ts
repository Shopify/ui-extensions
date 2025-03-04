import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ReprintReceiptInput extends BaseTransactionComplete {
  transactionType: 'Reprint';
  lineItems: LineItem[];
}

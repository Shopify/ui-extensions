import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ReturnTransactionInput extends BaseTransactionComplete {
  transactionType: 'Return';
  lineItems: LineItem[];
}

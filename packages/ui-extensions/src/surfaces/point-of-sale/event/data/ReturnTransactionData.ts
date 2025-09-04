import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ReturnTransactionData extends BaseTransactionComplete {
  transactionType: 'Return';
  refundId?: number;
  returnId?: number;
  exchangeId?: number;
  lineItems: LineItem[];
}

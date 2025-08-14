import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ExchangeTransactionData extends BaseTransactionComplete {
  transactionType: 'Exchange';
  returnId?: number;
  exchangeId?: number;
  lineItemsAdded: LineItem[];
  lineItemsRemoved: LineItem[];
}

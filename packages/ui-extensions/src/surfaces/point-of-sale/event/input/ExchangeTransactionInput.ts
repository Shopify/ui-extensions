import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';

export interface ExchangeTransactionInput extends BaseTransactionComplete {
  transactionType: 'Exchange';
  exchangeId?: string;
  lineItemsAdded: LineItem[];
  lineItemsRemoved: LineItem[];
}

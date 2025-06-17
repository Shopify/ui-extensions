import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {OrderLineItem} from '../../types/order';

export interface ReprintReceiptData extends BaseTransactionComplete {
  transactionType: 'Reprint';
  lineItems: OrderLineItem[];
}

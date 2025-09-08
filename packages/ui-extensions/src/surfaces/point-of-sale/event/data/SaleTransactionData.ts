import {BaseTransactionComplete} from '../../types/base-transaction-complete';
import {LineItem} from '../../types/cart';
import {DiscountApplication} from '../../types/discount-application';

export interface SaleTransactionData extends BaseTransactionComplete {
  transactionType: 'Sale';
  draftCheckoutUuid?: string;
  lineItems: LineItem[];
  discountApplications?: DiscountApplication[];
}

import {BaseInput} from './BaseInput';

export interface PurchaseCompleteInput extends BaseInput {
  lineItems: any[];
  discounts: any[];
  attributedStaff: any;
  orderId: any;
  draftCheckoutId: any;
  taxLines: any[];
  shippingLines: any[];
}

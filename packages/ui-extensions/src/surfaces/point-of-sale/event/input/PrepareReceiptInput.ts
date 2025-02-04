import {Checkout} from '../../types/checkout';
import {BaseInput} from './BaseInput';

export interface PrepareReceiptInput extends BaseInput {
  checkout: Checkout;
}

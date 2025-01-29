import {BaseInput} from './BaseInput';
import {Checkout} from '../../types/checkout';

export interface TransactionCompleteInput extends BaseInput {
  checkout: Checkout;
}

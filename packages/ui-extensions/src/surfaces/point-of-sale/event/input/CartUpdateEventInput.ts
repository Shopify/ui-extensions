import {BaseInput} from './BaseInput';
import {Cart} from '../../api';

export interface CartUpdateEventInput extends BaseInput {
  cart: Cart;
}

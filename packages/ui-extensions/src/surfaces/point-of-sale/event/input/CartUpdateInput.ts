import {BaseInput} from './BaseInput';
import {Cart} from '../../api';

export interface CartUpdateInput extends BaseInput {
  cart: Cart;
}

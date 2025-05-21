import {BaseData} from './BaseData';
import {Cart} from '../../api';
import {BaseApi} from './BaseApi';

export interface CartUpdateEventData extends BaseData, BaseApi {
  cart: Cart;
}

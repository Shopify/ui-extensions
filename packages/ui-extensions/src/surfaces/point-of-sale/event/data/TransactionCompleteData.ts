import {BaseData} from './BaseData';
import type {SaleTransactionData} from './SaleTransactionData';
import type {ExchangeTransactionData} from './ExchangeTransactionData';
import type {ReturnTransactionData} from './ReturnTransactionData';
import {BaseApi} from './BaseApi';

export interface TransactionCompleteData extends BaseData, BaseApi {
  transaction:
    | SaleTransactionData
    | ReturnTransactionData
    | ExchangeTransactionData;
}

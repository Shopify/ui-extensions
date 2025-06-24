import {BaseData} from './BaseData';
import type {SaleTransactionData} from './SaleTransactionData';
import type {ExchangeTransactionData} from './ExchangeTransactionData';
import type {ReturnTransactionData} from './ReturnTransactionData';
import type {ReprintReceiptData} from './ReprintReceiptData';
import {BaseApi} from './BaseApi';

export interface TransactionCompleteData extends BaseData, BaseApi {
  transaction:
    | SaleTransactionData
    | ReturnTransactionData
    | ExchangeTransactionData;
}

export interface TransactionCompleteWithReprintData extends BaseData, BaseApi {
  transaction:
    | SaleTransactionData
    | ReturnTransactionData
    | ExchangeTransactionData
    | ReprintReceiptData;
}

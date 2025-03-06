import {BaseInput} from './BaseInput';
import type {SaleTransactionInput} from './SaleTransactionInput';
import type {ExchangeTransactionInput} from './ExchangeTransactionInput';
import type {ReturnTransactionInput} from './ReturnTransactionInput';

export interface TransactionCompleteInput extends BaseInput {
  transaction:
    | SaleTransactionInput
    | ReturnTransactionInput
    | ExchangeTransactionInput;
}

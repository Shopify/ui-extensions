import {BaseData} from './BaseData';
import type {SaleTransactionData} from './SaleTransactionData';
import type {ExchangeTransactionData} from './ExchangeTransactionData';
import type {ReturnTransactionData} from './ReturnTransactionData';
import type {ReprintReceiptData} from './ReprintReceiptData';

/**
 * The data object provided to receipt targets containing transaction details.
 * @publicDocs
 */
export interface TransactionCompleteData extends BaseData {
  /**
   * The transaction data, which can be one of the following types:
   * - `SaleTransactionData`: Defines the data structure for completed sale transactions.
   * - `ReturnTransactionData`: Defines the data structure for completed return transactions.
   * - `ExchangeTransactionData`: Defines the data structure for completed exchange transactions.
   */
  transaction:
    | SaleTransactionData
    | ReturnTransactionData
    | ExchangeTransactionData;
}

/**
 * The data object provided to receipt targets containing transaction details and reprint information.
 */
export interface TransactionCompleteWithReprintData extends BaseData {
  /**
   * The transaction data, which can be one of the following types:
   * - `SaleTransactionData`: Defines the data structure for completed sale transactions.
   * - `ReturnTransactionData`: Defines the data structure for completed return transactions.
   * - `ExchangeTransactionData`: Defines the data structure for completed exchange transactions.
   * - `ReprintReceiptData`: Defines the data structure for receipt reprint requests.
   */
  transaction:
    | SaleTransactionData
    | ReturnTransactionData
    | ExchangeTransactionData
    | ReprintReceiptData;
}

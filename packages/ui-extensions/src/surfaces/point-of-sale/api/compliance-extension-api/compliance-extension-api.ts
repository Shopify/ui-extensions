import {RemoteSubscribable} from '@remote-ui/async-subscription';

export interface ComplianceExtensionApi {
  compliance: ComplianceExtensionApiContent;
}

export interface ComplianceExtensionApiContent {
  subscribable: RemoteSubscribable<ComplianceEvent | null>;
  setComplianceLines: (orderId: number, lineItems: ComplianceLine[]) => void;
  setPrintReceiptButtonLocked: (disabled: boolean) => void;
}

export enum ComplianceEventType {
  TransactionStart = 'TRANSACTION_START',
  TransactionEnd = 'TRANSACTION_END',
  TransactionSummary = 'TRANSACTION_SUMMARY',
  ProductAdd = 'PRODUCT_ADD',
}
export interface ProductAddAction {
  id: string;
}
export enum ComplianceLineKind {
  Header = 'Header',
  Text = 'Text',
  List = 'List',
  QRCode = 'QRCode',
}
export interface ComplianceLine {
  kind: ComplianceLineKind;
  title: string;
  value: string;
  isError: boolean;
}

export type ComplianceEvent =
  | ComplianceEventDataTransactionStart
  | ComplianceEventDataTransactionEnd
  | ComplianceEventDataTransactionSummary
  | ComplianceEventDataProductAdd;

export interface ComplianceEventDataTransactionStart {
  type: ComplianceEventType.TransactionStart;
}

export interface ComplianceEventDataTransactionEnd {
  type: ComplianceEventType.TransactionEnd;
}

export interface ComplianceEventDataTransactionSummary {
  type: ComplianceEventType.TransactionSummary;
}
export interface ComplianceEventDataProductAdd {
  type: ComplianceEventType.ProductAdd;
  product: ProductAddAction;
}

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  timestamp: number;
}

export interface TransactionSummary {
  totalAmount: number;
  totalTransactions: number;
}

import {RemoteSubscribable} from '@remote-ui/async-subscription';

export interface PrinterExtensionApi {
  printer: PrinterExtensionApiContent;
}

export interface PrinterExtensionApiContent {
  subscribable: RemoteSubscribable<PrinterComplianceEvent | null>; // For dispatch events
  print: (xml_request: string) => any;
}

// For dispatch events

export enum PrinterComplianceEventType {
  PrintReceipt = 'PRINT_RECEIPT',
}

export type PrinterComplianceEvent =
  | PrinterComplianceEventDataPrintReceipt
  | null;

export interface PrinterComplianceEventDataPrintReceipt {
  type: PrinterComplianceEventType.PrintReceipt;
}

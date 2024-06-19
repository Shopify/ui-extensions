import {createRemoteComponent} from '@remote-ui/core';

export interface AdminPrintActionProps {
  /**
   * Sets the src URL of the preview and the document to print.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   */
  src?: string;
}

/**
 * AdminPrintAction is a component used by Admin Print Action extensions to configure a src document to preview and print.
 */
export const AdminPrintAction = createRemoteComponent<
  'AdminPrintAction',
  AdminPrintActionProps
>('AdminPrintAction');

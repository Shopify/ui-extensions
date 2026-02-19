import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the AdminPrintAction component, used by Admin Print Action
 * extensions to configure a source document to preview and print.
 */
export interface AdminPrintActionProps {
  /**
   * The URL of the document to preview and print. Supported formats include
   * HTML, PDF, and image files. If not provided, then the preview displays an
   * empty state and the print button is disabled.
   *
   * Set this to the URL of the generated document once it's ready for the
   * merchant to review and print.
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

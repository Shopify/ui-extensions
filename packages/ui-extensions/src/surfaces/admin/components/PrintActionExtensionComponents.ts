import {StandardComponents} from './StandardComponents';

/**
 * The components available for building print action extensions. Includes all standard components plus the `AdminPrintAction` component required for print action setup.
 */
export type PrintActionExtensionComponents =
  | StandardComponents
  | 'AdminPrintAction';

export default PrintActionExtensionComponents;

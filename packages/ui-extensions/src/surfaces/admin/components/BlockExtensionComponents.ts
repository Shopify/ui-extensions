import {StandardComponents} from './StandardComponents';

/**
 * The components available for building block extensions. Includes all standard components plus the `AdminBlock` component required for block extension setup and the `Form` component for creating forms.
 */
export type BlockExtensionComponents =
  | StandardComponents
  | 'AdminBlock'
  | 'Form';

export default BlockExtensionComponents;

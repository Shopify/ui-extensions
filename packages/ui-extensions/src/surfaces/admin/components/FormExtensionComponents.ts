import {StandardComponents} from './StandardComponents';

/**
 * The components available for building form-based extensions. Includes all standard components plus the `Form` component for creating structured data collection interfaces with submission handling and validation.
 */
export type FormExtensionComponents = StandardComponents | 'Form';

export default FormExtensionComponents;

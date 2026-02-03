import {FormExtensionComponents} from './FormExtensionComponents';

/**
 * The components available for building function settings extensions. Includes all form components plus the `FunctionSettings` component required for function settings configuration.
 */
export type FunctionSettingsComponents =
  | FormExtensionComponents
  | 'FunctionSettings';

export default FunctionSettingsComponents;

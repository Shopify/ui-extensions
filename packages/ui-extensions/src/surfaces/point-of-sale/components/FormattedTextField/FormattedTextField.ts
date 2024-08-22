import {createRemoteComponent} from '@remote-ui/core';
import type {AutoCapitalizationType} from '../shared/auto-capitalization-type';
import type {BaseTextFieldProps} from '../shared/BaseTextField';

/**
 * Dictates what type of values can be used in a `TextField`.
 */
export type InputType = 'text' | 'number' | 'currency' | 'giftcard' | 'email';
/**
 * @property `inputType` the `InputType` of the `TextField`. This will select the appropriate keyboard.
 * @property `autoCapitalize` dictates when the text should be auto-capitalized.
 * @property `customValidator` applies a custom validator that can dictate whether or not an entered value is valid.
 */
export interface FormattedTextFieldProps extends BaseTextFieldProps {
  /**
   * The `InputType` of the `TextField`. This will select the appropriate keyboard.
   */
  inputType?: InputType;
  /**
   * Dictates when the text should be auto-capitalized.
   */
  autoCapitalize?: AutoCapitalizationType;
  /**
   * **Warning:** This callback is currently broken and will not work as intended.
   *
   * Custom validator function to determine the validity of an entered value.
   *
   * @deprecated This callback will be removed in version 2025-01.
   * Please update your code to avoid using this feature.
   */
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

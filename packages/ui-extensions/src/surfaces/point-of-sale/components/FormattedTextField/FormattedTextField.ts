import {createRemoteComponent} from '@remote-ui/core';
import type {AutoCapitalizationType} from '../shared/auto-capitalization-type';
import type {BaseTextFieldProps} from '../shared/BaseTextField';

/** @publicDocs */
export type InputType = 'text' | 'number' | 'currency' | 'giftcard' | 'email';
/** @publicDocs */
export interface FormattedTextFieldProps extends BaseTextFieldProps {
  /**
   * Defines the input type options that determine which specialized keyboard layout is displayed.
   *
   * - `text`: A general text input type with standard keyboard layout for any text content.
   * - `number`: A numeric input type with number-optimized keyboard for entering quantities or numeric values.
   * - `currency`: A currency input type with keyboard optimized for monetary amounts and decimal values.
   * - `giftcard`: A gift card input type with keyboard optimized for alphanumeric gift card codes.
   * - `email`: An email input type with keyboard optimized for email addresses, including easy access to @ and domain symbols.
   */
  inputType?: InputType;
  /**
   * Defines the auto-capitalization behavior options for text input.
   *
   * - `none`: No automatic capitalization is applied to the text input.
   * - `sentences`: The first letter of each sentence is automatically capitalized.
   * - `words`: The first letter of each word is automatically capitalized.
   * - `characters`: Every character is automatically capitalized as it is entered.
   */
  autoCapitalize?: AutoCapitalizationType;
  /**
   * Applies a custom validator that can dictate whether or not an entered value is valid.
   */
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

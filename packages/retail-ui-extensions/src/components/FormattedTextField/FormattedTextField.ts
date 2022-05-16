import {createRemoteComponent} from '@remote-ui/core';
import {TextFieldProps} from 'components/TextField';
import type {AutoCapitalizationType} from '../shared';

export type InputType =
  | 'text'
  | 'number'
  | 'percent'
  | 'boundlessPercent'
  | 'currency'
  | 'giftcard'
  | 'expiry'
  | 'date'
  | 'zip'
  | 'password'
  | 'email'
  | 'url'
  | 'phone';

export interface FormattedTextFieldProps extends TextFieldProps {
  inputType?: InputType;
  showError?: boolean;
  autoCapitalize?: AutoCapitalizationType;
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

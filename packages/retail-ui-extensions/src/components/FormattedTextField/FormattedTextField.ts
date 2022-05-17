import {createRemoteComponent} from '@remote-ui/core';
import {BaseTextFieldProps} from 'components/shared/BaseTextField';
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

export interface FormattedTextFieldProps extends BaseTextFieldProps {
  inputType?: InputType;
  showError?: boolean;
  autoCapitalize?: AutoCapitalizationType;
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

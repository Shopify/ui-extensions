import {createRemoteComponent} from '@remote-ui/core';
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

export interface FormattedTextFieldProps {
  inputType?: InputType;
  title?: string;
  initialValue?: string;
  hint?: string;
  errorMessage?: string;
  showError?: boolean;
  autoCapitalize?: AutoCapitalizationType;
  onUpdate?: (value: string) => void;
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

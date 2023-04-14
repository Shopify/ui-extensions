import {createRemoteComponent} from '@remote-ui/core';
import type {AutoCapitalizationType, BaseTextFieldProps} from '../shared';

export type InputType = 'text' | 'number' | 'currency' | 'giftcard' | 'email';

export interface FormattedTextFieldProps extends BaseTextFieldProps {
  inputType?: InputType;
  autoCapitalize?: AutoCapitalizationType;
  customValidator?: (text: string) => boolean;
}

export const FormattedTextField = createRemoteComponent<
  'FormattedTextField',
  FormattedTextFieldProps
>('FormattedTextField');

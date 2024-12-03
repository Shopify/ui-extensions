import {createRemoteComponent} from '@remote-ui/core';
import type {BaseTextFieldProps} from '../shared/BaseTextField';
import type {InputProps} from '../shared/InputField';

export interface ActionProps {
  type: 'action';
  message: string;
  onPress: (value: string) => void;
}

export interface InfoProps {
  type: 'info';
  message: string;
  alwaysShow?: boolean;
}

export interface SuccessProps {
  type: 'success';
  message?: string;
}

export interface PasswordProps {
  type: 'password';
  onPress: (value: string) => void;
}

export type EmbeddedElementProps =
  | ActionProps
  | InfoProps
  | SuccessProps
  | PasswordProps;

export interface NewTextFieldProps extends InputProps {}

/**
 * @deprecated
 * This TextField component will only support NewTextFieldProps in version 2.0.0.
 * Please migrate to using NewTextFieldProps as soon as possible.
 */
export interface TextFieldProps extends BaseTextFieldProps {
  rightElementStyle?: EmbeddedElementProps;
}

export const TextField = createRemoteComponent<
  'TextField',
  TextFieldProps | NewTextFieldProps
>('TextField');

import {createRemoteComponent} from '@remote-ui/core';
import type {BaseTextFieldProps, InputProps} from '../shared';

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
export interface TextFieldProps extends BaseTextFieldProps {
  rightElementStyle?: EmbeddedElementProps;
}

/**
 * @deprecated
 * This TextField component will be replaced by NewTextField in version 2.0.0.
 * Please migrate to using NewTextField as soon as possible.
 */
export const TextField = createRemoteComponent<
  'TextField',
  TextFieldProps | NewTextFieldProps
>('TextField');

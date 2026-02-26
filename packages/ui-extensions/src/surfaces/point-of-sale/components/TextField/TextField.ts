import {createRemoteComponent} from '@remote-ui/core';
import type {BaseTextFieldProps} from '../shared/BaseTextField';
import type {InputProps} from '../shared/InputField';

export interface ActionProps {
  /**
   * Identifies this as an action-type embedded element.
   */
  type: 'action';
  /**
   * The message or label text displayed for the action.
   */
  message: string;
  /**
   * A callback function executed when the action button is pressed, receiving the current field value as a parameter.
   */
  onPress: (value: string) => void;
}

export interface InfoProps {
  /**
   * Identifies this as an info-type embedded element.
   */
  type: 'info';
  /**
   * The informational message text to display to the user.
   */
  message: string;
  /**
   * Controls whether the info message is always visible or only shown under certain conditions.
   */
  alwaysShow?: boolean;
}

export interface SuccessProps {
  /**
   * Identifies this as a success-type embedded element.
   */
  type: 'success';
  /**
   * An optional success message to display when the field validation or operation succeeds.
   */
  message?: string;
}

export interface PasswordProps {
  /**
   * Identifies this as a password-type embedded element.
   */
  type: 'password';
  /**
   * A callback function executed when the password action button is pressed, receiving the current field value as a parameter.
   */
  onPress: (value: string) => void;
}

export type EmbeddedElementProps =
  | ActionProps
  | InfoProps
  | SuccessProps
  | PasswordProps;

/**
 * Configure the following properties on the TextField component.
 *
 * @publicDocs
 */
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

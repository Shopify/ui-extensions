import {createRemoteComponent} from '@remote-ui/core';
import type {TextFieldProps as BaseTextFieldProps} from '@shopify/ui-api-design';

export interface TextFieldProps extends Omit<BaseTextFieldProps, 'icon'> {}

/**
 * Use a text field to get text input from a customer.
 */
export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);

import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface TextFieldProps {
  label?: string;
  type?: 'text' | 'search' | 'number';
  value?: string;
  placeholder?: string;
  multiline?: number | boolean;
  onAfterChange?: (value: string) => void;
  onBlur?(): void | Promise<void>;
  onFocus?(): void | Promise<void>;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>('TextField');

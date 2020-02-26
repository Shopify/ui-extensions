import {createRemoteComponent} from '@shopify/remote-ui-core';

export interface TextFieldProps {
  label: string;
  type?: 'text' | 'search';
  value: string;
  helpText?: string;
  placeholder?: string;
  multiline?: number | boolean;
  onChange(value: string): void | Promise<void>;
  error?: string;
  showCharacterCount?: boolean;
  onBlur?(): void | Promise<void>;
  onFocus?(): void | Promise<void>;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>('TextField');

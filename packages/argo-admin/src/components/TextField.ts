import {createRemoteComponent} from '@remote-ui/core';

export interface TextFieldProps {
  label?: string;
  type?: 'text' | 'search' | 'number';
  value?: string;
  placeholder?: string;
  multiline?: number | boolean;
  prefix?: string;
  suffix?: string;
  error?: string;
  onAfterChange?: (value: string) => void;
  onBlur?(): void | Promise<void>;
  onFocus?(): void | Promise<void>;
  clearButton?: boolean;
  onClearButtonClick?(): void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>('TextField');

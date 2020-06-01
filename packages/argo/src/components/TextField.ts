import {createRemoteComponent} from '../utilities';

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
  onClearButtonClick?(id: string): void;
}

export const TextField = createRemoteComponent<'TextField', TextFieldProps>('TextField');

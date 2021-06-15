import {createRemoteComponent} from '@remote-ui/core';

export interface TextFieldProps {
  /** Human-readable label for the input. */
  label: string;

  /** Input type */
  type?: 'text' | 'search' | 'number';

  /** Input value. */
  value?: string;

  /** Hint text to display when no text is input */
  placeholder?: string;

  /** Allow for multiple lines of input. */
  multiline?: number | boolean;

  /** Text to display before the input value. */
  prefix?: string;

  /** Text to display after the input value. */
  suffix?: string;

  /** Error text to display beneath the label. */
  error?: string;

  /** Callback when value is changed. */
  onInput?: (value: string) => void;

  /** Callback when user leaves the input. */
  onChange?: (value: string) => void;

  /** Callback when input is focused. */
  onFocus?(): void | Promise<void>;

  /** Callback when focus is removed. */
  onBlur?(): void | Promise<void>;

  /** Show a 'clear text' button in the input. */
  clearButton?: boolean;

  /** Callback when clear button is pressed. */
  onClearButtonPress?(): void;
}

/**
 * TextField is a versatile input field that merchants can type into.
 *
 * It supports several input formats including numbers.
 */
export const TextField = createRemoteComponent<'TextField', TextFieldProps>(
  'TextField',
);

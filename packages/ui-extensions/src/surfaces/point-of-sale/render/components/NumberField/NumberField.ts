import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

/**
 * Represents the properties for the NumberField component.
 * @typedef {Object} NumberFieldProps
 * @property {'decimal' | 'numeric'} [inputMode] - The mode of input, can be either 'decimal' or 'numeric'.
 */
export interface NumberFieldProps extends InputProps {
  inputMode?: 'decimal' | 'numeric';
  /**
   * The highest decimal or integer to be accepted for the field.
   */
  max?: number;
  /**
   * The lowest decimal or integer to be accepted for the field.
   */
  min?: number;
}

export const NumberField = createRemoteComponent<
  'NumberField',
  NumberFieldProps
>('NumberField');

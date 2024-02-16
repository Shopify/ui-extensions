import {createRemoteComponent} from '@remote-ui/core';
import type {InputProps} from '../shared/InputField';

/**
 * Represents the properties for the NumberField component.
 * @typedef {Object} NumberFieldProps
 * @property {'decimal' | 'numeric'} [inputMode] - The mode of input, can be either 'decimal' or 'numeric'.
 * @property {number} [max] - The highest decimal or integer to be accepted for the field.
 * @property {number} [min] - The lowest decimal or integer to be accepted for the field.
 */
export interface NumberFieldProps extends InputProps {
  inputMode?: 'decimal' | 'numeric';
  max?: number;
  min?: number;
}

export const NumberField = createRemoteComponent<
  'NumberField',
  NumberFieldProps
>('NumberField');

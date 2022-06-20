import {createRemoteComponent} from '@remote-ui/core';

import {TextFieldProps} from '../TextField';
import {IconSource} from '../Icon';

export interface StepperProps
  extends Pick<
    TextFieldProps<number>,
    | 'id'
    | 'name'
    | 'label'
    | 'prefix'
    | 'accessibilityDescription'
    | 'required'
    | 'error'
    | 'disabled'
    | 'readonly'
    | 'value'
    | 'onFocus'
    | 'onBlur'
    | 'onInput'
    | 'onChange'
  > {
  /**
   * An icon to render at the start of the field.
   */
  icon?: IconSource;

  /**
   * The highest decimal or integer to be accepted for the stepper field.
   * When used with `step` the value will round down to the max number.
   * Note: a buyer will still be able to use the keyboard to input a number higher than
   * the max. It is up to the developer to add appropriate validation.
   */
  max?: number;

  /**
   * The lowest decimal or integer to be accepted for the stepper field.
   * When used with `step` the value will round up to the min number.
   * Note: a buyer will still be able to use the keyboard to input a number lower than
   * the min. It is up to the developer to add appropriate validation.
   *
   * @defaultValue 0
   */
  min?: number;

  /**
   * The amount the value can increase or decrease by. This can be an integer or decimal.
   * If a `max` or `min` is specified with `step` when increasing/decreasing the value
   * via the stepper buttons the final value will always round to the `max` or `min`
   * rather than the closest valid amount.
   *
   * @defaultValue 1
   */
  step?: number;
}

/**
 * Use a stepper to increase or decrease a value, like changing the quantity from 1 to 2.
 */
export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);

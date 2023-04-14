import {createRemoteComponent} from '@remote-ui/core';

export interface StepperProps {
  /**
   * The initial value of the stepper.
   */
  initialValue: number;

  /**
   * A callback that is called when the value of the stepper changes.
   */
  onValueChanged: (value: number) => void;

  /**
   * @defaultValue 1
   * Use to set the minimum value of the stepper.
   */
  minimumValue?: number;

  /**
   * Use to set the maximum value of the stepper.
   */
  maximumValue?: number;

  /**
   * Only use this field if you wish to override the internal state of this component.
   */
  value?: number;

  /**
   * @defaultValue false
   * Whether the field can be modified.
   */
  disabled?: boolean;
}

export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);

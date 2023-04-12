import {createRemoteComponent} from '@remote-ui/core';

export interface StepperProps {
  initialValue: number;
  onValueChanged: (value: number) => void;
  disabled?: boolean;
}

export const Stepper = createRemoteComponent<'Stepper', StepperProps>(
  'Stepper',
);

import {Stepper as BaseStepper} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {StepperProps} from '@shopify/ui-extensions/point-of-sale';

export const Stepper = createRemoteReactComponent(BaseStepper);

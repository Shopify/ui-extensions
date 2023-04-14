import {Stepper as BaseStepper} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {StepperProps} from '@shopify/retail-ui-extensions';

export const Stepper = createRemoteReactComponent(BaseStepper);

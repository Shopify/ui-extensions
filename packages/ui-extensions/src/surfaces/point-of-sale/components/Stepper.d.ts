/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A component used for increasing or decreasing quantities.
 */
export interface StepperProps extends GlobalProps {
  /**
   * The initial value of the stepper.
   */
  initialValue?: number;
  /**
   * The current value of the stepper.
   */
  value?: number;
  /**
   * Callback executed when the value changes.
   */
  onValueChanged?: (value: number) => void;
  /**
   * The minimum value allowed.
   */
  minimumValue?: number;
  /**
   * The maximum value allowed.
   */
  maximumValue?: number;
}

declare const Stepper_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Stepper extends Stepper_base implements StepperProps {
  accessor initialValue: StepperProps['initialValue'];
  accessor value: StepperProps['value'];
  accessor onvaluechanged: CallbackEventListener<typeof tagName> | null;
  accessor minimumValue: StepperProps['minimumValue'];
  accessor maximumValue: StepperProps['maximumValue'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Stepper;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: StepperJSXProps & PreactBaseElementPropsWithChildren<Stepper>;
    }
  }
}

declare const tagName = 's-stepper';

export interface StepperJSXProps extends Partial<StepperProps> {
  onValueChanged?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Stepper};
export type {StepperJSXProps};

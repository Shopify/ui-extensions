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
 * The validation result for PIN submission.
 */
export type PinValidationResult = 'accept' | 'reject';

/**
 * The action configuration for the PIN pad.
 */
export interface PinPadAction {
  /**
   * The label text for the action button.
   */
  label: string;
  /**
   * The callback executed when the action button is pressed.
   */
  onPress: () => void;
}

/**
 * A component used to authenticate or identify individuals through a standardized number pad.
 */
export interface PinPadProps extends GlobalProps {
  /**
   * Whether the PIN should be masked (shown as dots).
   */
  masked?: boolean;
  /**
   * The minimum length of the PIN.
   */
  minPinLength?: number;
  /**
   * The maximum length of the PIN.
   */
  maxPinLength?: number;
  /**
   * The label displayed above the PIN pad.
   */
  label?: string;
  /**
   * Action button configuration.
   */
  pinPadAction?: PinPadAction;
  /**
   * Callback executed when the PIN is submitted.
   */
  onSubmit?: (pin: number[]) => Promise<PinValidationResult>;
  /**
   * Callback executed when a PIN digit is entered.
   */
  onPinEntry?: (pin: number[]) => void;
}

declare const PinPad_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class PinPad extends PinPad_base implements PinPadProps {
  accessor masked: PinPadProps['masked'];
  accessor minPinLength: PinPadProps['minPinLength'];
  accessor maxPinLength: PinPadProps['maxPinLength'];
  accessor label: PinPadProps['label'];
  accessor pinPadAction: PinPadProps['pinPadAction'];
  accessor onsubmit: CallbackEventListener<typeof tagName> | null;
  accessor onpinentry: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: PinPad;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: PinPadJSXProps & PreactBaseElementPropsWithChildren<PinPad>;
    }
  }
}

declare const tagName = 's-pin-pad';

export interface PinPadJSXProps extends Partial<PinPadProps> {
  onSubmit?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onPinEntry?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {PinPad};
export type {PinPadJSXProps, PinValidationResult};

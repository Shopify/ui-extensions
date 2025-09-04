import {createRemoteComponent} from '@remote-ui/core';
import {BasePinPadOptions, PinValidationResult} from '../../../types/pin-pad';

/**
 * Represents the properties for the PinPad component.
 * @typedef {Object} PinPadProps
 * @property {boolean} [masked] - Whether the entered PIN should be masked.
 * @property {PinLength} [minPinLength] - The minimum length of the PIN.
 * @property {PinLength} [maxPinLength] - The maximum length of the PIN.
 * @property {string} [label] - The content for the prompt on the pin pad.
 * @property {PinPadActionType} [pinPadAction] - The call to action between the entry view and the keypad, consisting of a label and function that returns the pin.
 * @property {function(pin: number[]): Promise<PinValidationResult>} onSubmit - The function to be called when the PIN is submitted.
 * @property {function(pin: number[]): void} [onPinEntry] - The function to be called when a PIN is entered.
 */
export interface PinPadProps extends BasePinPadOptions {
  /**
   * The function to be called when the PIN is submitted.
   */
  onSubmit: (pin: number[]) => Promise<PinValidationResult>;
}

export const PinPad = createRemoteComponent<'PinPad', PinPadProps>('PinPad');

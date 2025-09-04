import {
  BasePinPadOptions,
  PinPadResult,
  PinValidationResult,
} from '../../../types/pin-pad';

export interface PinPadApiActionType {
  label: string;
  onClick: () => Promise<number[]>;
}
export type PinPadOptions = Omit<BasePinPadOptions, 'pinPadAction'> & {
  /**
   * The function to be called when the pin pad modal is dismissed
   */
  onDismissed?: (result: PinPadResult) => void;
  /**
   * The call to action between the entry view and the keypad
   */
  pinPadAction?: PinPadApiActionType;
};

export interface PinPadApiContent {
  /** Shows a pin pad to the user in a modal dialog.
   *
   * @param onSubmit the function to be called when the PIN is submitted.
   * The callback should be used to validate the PIN and return `accept` or `reject`.
   * @param options the options for the pin pad
   */
  showPinPad(
    onSubmit: (pin: number[]) => Promise<PinValidationResult>,
    options?: PinPadOptions,
  ): void;
}

/**
 * Access the Pin Pad API for pin pad functionality in a modal.
 */
export interface PinPadApi {
  pinPad: PinPadApiContent;
}

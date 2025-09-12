import {PinPadOptions, PinValidationResult} from '../types/pin-pad';

export interface PinPadApiContent {
  /** Shows a pin pad to the user in a modal dialog.
   *
   * @param onSubmit the function to be called when the PIN is submitted.
   * The callback should be used to validate the PIN and return `accept` or `reject`.
   * @param options the options for the pin pad
   */
  showPinPad(
    onSubmit: (
      pin: number[],
    ) => Promise<PinValidationResult> | PinValidationResult,
    options?: PinPadOptions,
  ): void;
}

/**
 * Access the Pin Pad API for pin pad functionality in a modal.
 */
export interface PinPadApi {
  pinPad: PinPadApiContent;
}

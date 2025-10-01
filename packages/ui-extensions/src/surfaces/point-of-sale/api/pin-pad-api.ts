import {PinPadOptions, PinValidationResult} from '../types/pin-pad';

export interface PinPadApiContent {
  /** Shows a PIN pad to the user in a modal dialog.
   *
   * `onSubmit` is called when the PIN is submitted for validation by the user. The callback
   * should validate the PIN and accept or reject it.
   *
   * If the PIN is accepted, the modal will be dismissed and the `onDismissed` callback
   * (provided via `options`) will be called. It is recommended that any post-validation
   * navigation is performed in this callback rather than in `onSubmit`.
   *
   * If the PIN is rejected, the optional `errorMessage` will be displayed to the user and the modal
   * will not be dismissed.
   *
   */
  showPinPad(
    onSubmit: (
      pin: number[],
    ) => Promise<PinValidationResult> | PinValidationResult,
    options?: PinPadOptions,
  ): void;
}

/**
 * Access the PIN Pad API for PIN pad functionality in a modal.
 */
export interface PinPadApi {
  pinPad: PinPadApiContent;
}

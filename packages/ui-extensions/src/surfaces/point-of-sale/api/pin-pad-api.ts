import {PinPadOptions, PinValidationResult} from '../types/pin-pad';

export interface PinPadApiContent {
  /**
   * Shows a PIN pad to the user in a modal dialog. The `onSubmit` function is called when the PIN is submitted and should validate the PIN, returning `'accept'` or `'reject'`.
   *
   * • **When accepted**: Modal dismisses and triggers the `onDismissed` callback—perform any post-validation navigation in this callback rather than in `onSubmit`.
   *
   * • **When rejected**: Displays the optional `errorMessage` and keeps the modal open.
   *
   * Use for implementing secure authentication workflows, access control, or PIN-based verification systems.
   */
  showPinPad(
    onSubmit: (
      pin: number[],
    ) => Promise<PinValidationResult> | PinValidationResult,
    options?: PinPadOptions,
  ): void;
}

/**
 * The `PinPadApi` object provides methods for displaying secure PIN entry interfaces. Access these methods through `shopify.pinPad` to show PIN pad modals and handle PIN validation.
 */
export interface PinPadApi {
  pinPad: PinPadApiContent;
}

export interface PinPadResult {
  /**
   * Whether the PIN entry was completed (not cancelled)
   */
  completed: boolean;
  /**
   * The entered PIN (only present if completed is true)
   */
  pin?: number[];
}

/**
 * Represents the result of the pin pad onSubmit function.
 * @typedef {{result: 'accept'} | {result: 'reject'; errorMessage?: string}} PinValidationResult
 */
export type PinValidationResult =
  | {result: 'accept'}
  | {result: 'reject'; errorMessage?: string};

export type PinLength = 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface PinPadActionType {
  label: string;
  onClick: () => Promise<number[]> | number[];
}

export interface PinPadOptions {
  /**
   * The function to be called whenever the entered PIN is updated
   */
  onPinEntry?: (pin: number[]) => void;
  /**
   * The function to be called when the PIN pad modal is dismissed
   */
  onDismissed?: (result: PinPadResult) => void;
  /**
   * The content for the prompt on the PIN pad. This will be overridden by any
   * `errorMessage` provided when rejecting a PIN from the `onSubmit` callback.
   */
  label?: string;
  /**
   * Whether the entered PIN should be masked
   *
   * @default true
   */
  masked?: boolean;
  /**
   * The minimum length of the PIN
   *
   * @default 4
   */
  minPinLength?: PinLength;
  /**
   * The maximum length of the PIN
   *
   * @default 6
   */
  maxPinLength?: PinLength;
  /**
   * The call to action between the entry view and the keypad
   */
  pinPadAction?: PinPadActionType;
  /**
   * Title shown in the modal header
   */
  title?: string;
  /**
   * Whether the PIN should be automatically submitted when the user has entered the maximum PIN length
   *
   * @default false
   */
  autoSubmit?: boolean;
}

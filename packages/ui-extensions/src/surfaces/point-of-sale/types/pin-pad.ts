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
 * @typedef {('accept'|'reject')} PinValidationResult
 */
export type PinValidationResult = 'accept' | 'reject';

export type PinLength = 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface PinPadActionType {
  label: string;
  onClick: () => Promise<number[]> | number[];
}

export interface PinPadOptions {
  /**
   * The function to be called when a pin is entered
   */
  onPinEntry?: (pin: number[]) => void;
  /**
   * The function to be called when the pin pad modal is dismissed
   */
  onDismissed?: (result: PinPadResult) => void;
  /**
   * The content for the prompt on the pin pad
   */
  label?: string;
  /**
   * Whether the entered PIN should be masked
   */
  masked?: boolean;
  /**
   * The minimum length of the PIN
   */
  minPinLength?: PinLength;
  /**
   * The maximum length of the PIN
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
   * Whether the pin should be automatically submitted when the user has entered the maximum PIN length
   */
  autoSubmit?: boolean;
}

/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  CallbackEvent,
  CallbackEventListener,
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * The visibility state tuple for the picker.
 */
export type VisibleState = [boolean, (visible: boolean) => void];

/**
 * The input mode for the picker.
 */
export type InputMode = 'spinner' | 'clock';

/**
 * A component used to select a time through a dialog.
 */
export interface TimePickerProps {
  /**
   * The currently selected time as a string.
   */
  selected?: string;
  /**
   * Callback executed when a time is selected.
   */
  onChange?: (time: string) => void;
  /**
   * The visibility state of the picker.
   */
  visibleState?: VisibleState;
  /**
   * Whether to display time in 24-hour format (Android only).
   */
  is24Hour?: boolean;
  /**
   * The input mode for the picker.
   */
  inputMode?: InputMode;
}

declare class TimePicker
  extends PreactCustomElement
  implements TimePickerProps
{
  accessor selected: TimePickerProps['selected'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor visibleState: TimePickerProps['visibleState'];
  accessor is24Hour: TimePickerProps['is24Hour'];
  accessor inputMode: TimePickerProps['inputMode'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TimePicker;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TimePickerJSXProps &
        PreactBaseElementPropsWithChildren<TimePicker>;
    }
  }
}

declare const tagName = 's-time-picker';

export interface TimePickerJSXProps extends Partial<TimePickerProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {TimePicker};
export type {TimePickerJSXProps, VisibleState, InputMode};

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
export type InputMode = 'spinner' | 'calendar';

/**
 * A component used to select a date through a dialog.
 */
export interface DatePickerProps {
  /**
   * The currently selected date as a string.
   */
  selected?: string;
  /**
   * Callback executed when a date is selected.
   */
  onChange?: (date: string) => void;
  /**
   * The visibility state of the picker.
   */
  visibleState?: VisibleState;
  /**
   * The input mode for the picker.
   */
  inputMode?: InputMode;
}

declare class DatePicker
  extends PreactCustomElement
  implements DatePickerProps
{
  accessor selected: DatePickerProps['selected'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor visibleState: DatePickerProps['visibleState'];
  accessor inputMode: DatePickerProps['inputMode'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DatePicker;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DatePickerJSXProps &
        PreactBaseElementPropsWithChildren<DatePicker>;
    }
  }
}

declare const tagName = 's-date-picker';

export interface DatePickerJSXProps extends Partial<DatePickerProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {DatePicker};
export type {DatePickerJSXProps, VisibleState, InputMode};

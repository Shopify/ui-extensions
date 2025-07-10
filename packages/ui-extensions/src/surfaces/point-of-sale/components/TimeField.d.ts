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
 * A component that enables users to open a dialog and select a time through a text input.
 */
export interface TimeFieldProps extends GlobalProps {
  /**
   * The label displayed above the time field.
   */
  label?: string;
  /**
   * The current value of the time field.
   */
  value?: string;
  /**
   * Callback executed when the time changes.
   */
  onChange?: (value: string) => void;
}

declare const TimeField_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class TimeField extends TimeField_base implements TimeFieldProps {
  accessor label: TimeFieldProps['label'];
  accessor value: TimeFieldProps['value'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TimeField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TimeFieldJSXProps &
        PreactBaseElementPropsWithChildren<TimeField>;
    }
  }
}

declare const tagName = 's-time-field';

export interface TimeFieldJSXProps extends Partial<TimeFieldProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {TimeField};
export type {TimeFieldJSXProps};

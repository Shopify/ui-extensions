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
 * The action button configuration for the date field.
 */
export interface DateFieldAction {
  /**
   * The label text for the action button.
   */
  label: string;
  /**
   * The callback executed when the action button is pressed.
   */
  onPress: () => void;
}

/**
 * A component that enables users to open a dialog and select a date through a text input.
 */
export interface DateFieldProps {
  /**
   * The label displayed above the date field.
   */
  label?: string;
  /**
   * The current value of the date field.
   */
  value?: string;
  /**
   * Action button configuration.
   */
  action?: DateFieldAction;
  /**
   * Callback executed when the date changes.
   */
  onChange?: (value: string) => void;
  /**
   * Whether the field is editable.
   */
  editable?: boolean;
  /**
   * Whether the field is required.
   */
  required?: boolean;
  /**
   * The placeholder text shown when the field is empty.
   */
  placeholder?: string;
}

declare class DateField extends PreactCustomElement implements DateFieldProps {
  accessor label: DateFieldProps['label'];
  accessor value: DateFieldProps['value'];
  accessor action: DateFieldProps['action'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor editable: DateFieldProps['editable'];
  accessor required: DateFieldProps['required'];
  accessor placeholder: DateFieldProps['placeholder'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DateField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DateFieldJSXProps &
        PreactBaseElementPropsWithChildren<DateField>;
    }
  }
}

declare const tagName = 's-date-field';

export interface DateFieldJSXProps extends Partial<DateFieldProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {DateField};
export type {DateFieldJSXProps};

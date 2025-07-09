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
 * The action button configuration for the number field.
 */
export interface NumberFieldAction {
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
 * Use a number field to conveniently and accurately capture numerical values.
 */
export interface NumberFieldProps {
  /**
   * The label displayed above the number field.
   */
  label?: string;
  /**
   * The current value of the number field.
   */
  value?: string;
  /**
   * Action button configuration.
   */
  action?: NumberFieldAction;
  /**
   * Callback executed when the number changes.
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
  /**
   * Help text displayed below the field.
   */
  helpText?: string;
}

declare class NumberField
  extends PreactCustomElement
  implements NumberFieldProps
{
  accessor label: NumberFieldProps['label'];
  accessor value: NumberFieldProps['value'];
  accessor action: NumberFieldProps['action'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor editable: NumberFieldProps['editable'];
  accessor required: NumberFieldProps['required'];
  accessor placeholder: NumberFieldProps['placeholder'];
  accessor helpText: NumberFieldProps['helpText'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: NumberField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: NumberFieldJSXProps &
        PreactBaseElementPropsWithChildren<NumberField>;
    }
  }
}

declare const tagName = 's-number-field';

export interface NumberFieldJSXProps extends Partial<NumberFieldProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  id?: string;
}

export {NumberField};
export type {NumberFieldJSXProps};

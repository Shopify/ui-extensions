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
 * Use a text field to allow merchants to enter or edit text.
 */
export interface TextFieldProps extends GlobalProps {
  /**
   * The label displayed above the text field.
   */
  label?: string;
  /**
   * The placeholder text shown when the field is empty.
   */
  placeholder?: string;
  /**
   * Whether the field is required.
   */
  required?: boolean;
  /**
   * The current value of the text field.
   */
  value?: string;
  /**
   * Callback executed when the text changes.
   */
  onChange?: (value: string) => void;
  /**
   * Whether the field is editable.
   */
  editable?: boolean;
  /**
   * Whether the field should obscure text (for passwords).
   */
  secure?: boolean;
  /**
   * The type of keyboard to display.
   */
  keyboardType?: 'default' | 'email' | 'numeric' | 'phone';
}

declare const TextField_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class TextField extends TextField_base implements TextFieldProps {
  accessor label: TextFieldProps['label'];
  accessor placeholder: TextFieldProps['placeholder'];
  accessor required: TextFieldProps['required'];
  accessor value: TextFieldProps['value'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor editable: TextFieldProps['editable'];
  accessor secure: TextFieldProps['secure'];
  accessor keyboardType: TextFieldProps['keyboardType'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TextField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TextFieldJSXProps &
        PreactBaseElementPropsWithChildren<TextField>;
    }
  }
}

declare const tagName = 's-text-field';

export interface TextFieldJSXProps extends Partial<TextFieldProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {TextField};
export type {TextFieldJSXProps};

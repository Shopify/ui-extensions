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
 * Use a text area to allow merchants to input or modify multiline text.
 */
export interface TextAreaProps extends GlobalProps {
  /**
   * The label displayed above the text area.
   */
  label?: string;
  /**
   * The current value of the text area.
   */
  value?: string;
  /**
   * Callback executed when the text changes.
   */
  onChange?: (value: string) => void;
  /**
   * The initial number of lines to be displayed. Maximum of 8 lines.
   */
  rows?: number;
  /**
   * The placeholder text shown when the field is empty.
   */
  placeholder?: string;
  /**
   * Whether the field is required.
   */
  required?: boolean;
}

declare const TextArea_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class TextArea extends TextArea_base implements TextAreaProps {
  accessor label: TextAreaProps['label'];
  accessor value: TextAreaProps['value'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor rows: TextAreaProps['rows'];
  accessor placeholder: TextAreaProps['placeholder'];
  accessor required: TextAreaProps['required'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TextArea;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TextAreaJSXProps &
        PreactBaseElementPropsWithChildren<TextArea>;
    }
  }
}

declare const tagName = 's-text-area';

export interface TextAreaJSXProps extends Partial<TextAreaProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {TextArea};
export type {TextAreaJSXProps};

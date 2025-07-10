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
 * The action button configuration for the email field.
 */
export interface EmailFieldAction {
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
 * Use an email field to conveniently and accurately capture merchant email addresses.
 */
export interface EmailFieldProps extends GlobalProps {
  /**
   * The label displayed above the email field.
   */
  label?: string;
  /**
   * The current value of the email field.
   */
  value?: string;
  /**
   * Action button configuration.
   */
  action?: EmailFieldAction;
  /**
   * Callback executed when the email changes.
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

declare class EmailField
  extends PreactCustomElement
  implements EmailFieldProps
{
  accessor label: EmailFieldProps['label'];
  accessor value: EmailFieldProps['value'];
  accessor action: EmailFieldProps['action'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor editable: EmailFieldProps['editable'];
  accessor required: EmailFieldProps['required'];
  accessor placeholder: EmailFieldProps['placeholder'];
  accessor helpText: EmailFieldProps['helpText'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: EmailField;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: EmailFieldJSXProps &
        PreactBaseElementPropsWithChildren<EmailField>;
    }
  }
}

declare const tagName = 's-email-field';

export interface EmailFieldJSXProps extends Partial<EmailFieldProps> {
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {EmailField};
export type {EmailFieldJSXProps};

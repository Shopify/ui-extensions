/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  NumberFieldProps,
  Key,
  Ref,
  ComponentChild,
} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export interface CallbackEvent<T extends keyof HTMLElementTagNameMap> {
  currentTarget: HTMLElementTagNameMap[T];
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: HTMLElementTagNameMap[T] | null;
}

declare const tagName = 's-number-field';
export interface PickedJSXProps
  extends Pick<
    NumberFieldProps,
    | 'label'
    | 'details'
    | 'value'
    | 'placeholder'
    | 'disabled'
    | 'error'
    | 'required'
    | 'max'
    | 'min'
    | 'controls'
  > {
  inputMode?: Extract<NumberFieldProps['inputMode'], 'decimal' | 'numeric'>;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  accessory?: ComponentChild;
}
export interface NumberFieldJSXProps extends PickedJSXProps {
  /**
   * Content to use as the field label.
   *
   * Label is not supported when using Stepper controls
   */
  label?: PickedJSXProps['label'];
  /**
   * Additional text to provide context or guidance for the field.
   * This text is displayed along with the field and its label
   * to offer more information or instructions to the user.
   *
   * This will also be exposed to screen reader users.
   *
   * Details are not supported when using Stepper controls
   */
  details?: PickedJSXProps['details'];
  /**
   * Whether the field needs a value. This requirement adds semantic value
   * to the field, but it will not cause an error to appear automatically.
   * If you want to present an error when this field is empty, you can do
   * so with the `error` property.
   *
   * @default false
   *
   * Required is not supported when using Stepper controls
   */
  required?: PickedJSXProps['required'];
  /**
   * Indicate an error to the user. The field will be given a specific stylistic treatment
   * to communicate problems that have to be resolved immediately.
   *
   * Error is not supported when using Stepper controls
   */
  error?: PickedJSXProps['error'];
  /**
   * Sets the virtual keyboard.
   *
   * Input mode is not supported when using Stepper controls
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode
   * @default 'decimal'
   */
  inputMode?: PickedJSXProps['inputMode'];
  /**
   * A short hint that describes the expected value of the field.
   *
   * Placeholder text is not supported when using Stepper controls due to constrained space for the number field, especially on phones.
   */
  placeholder?: PickedJSXProps['placeholder'];
  /**
   * Additional content to be displayed in the field.
   * Commonly used to display an icon that activates a tooltip providing more information.
   *
   * Accessory is not supported when using Stepper controls
   */
  accessory?: PickedJSXProps['accessory'];
  /**
   * Sets the type of controls displayed for the field.
   *
   * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property. Note that in POS
   *   adding stepper controls simplifies the behaviour of the Number Field itself. The field supports only integer values, is always-populated and automatically
   *   validates the value to be within the min and max bounds. Validation, label, details and placeholder are not supported when using Stepper controls.
   *
   * - `none`: no controls are displayed and users must input the value manually.
   * - `auto`: the presence of the controls depends on the surface and context.
   */
  controls?: PickedJSXProps['controls'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: NumberFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<NumberFieldJSXProps, 'accessory'> &
        BaseElementPropsWithChildren<Omit<NumberFieldJSXProps, 'accessory'>>;
    }
  }
}

export {tagName};
export type {NumberFieldJSXProps};

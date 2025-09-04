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
  > {
  /**
   * Sets the type of controls displayed in the field.
   *
   * - `stepper`: displays buttons to increase or decrease the value of the field by the stepping interval defined in the `step` property.
   * - `none`: no controls are displayed and users must input the value manually.
   * - `auto`: the presence of the controls depends on the surface and context.
   *
   * @default 'auto'
   */
  controls?: NumberFieldProps['controls'];
  inputMode?: Extract<NumberFieldProps['inputMode'], 'decimal' | 'numeric'>;
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  accessory?: ComponentChild;
}
export interface NumberFieldJSXProps extends PickedJSXProps {
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
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: NumberFieldJSXProps;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: BaseElementPropsWithChildren<
        Omit<NumberFieldJSXProps, 'accessory'>
      >;
    }
  }
}

export {tagName};
export type {NumberFieldJSXProps};

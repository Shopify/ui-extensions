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
import type {SwitchProps, Key, Ref} from './components-shared.d.ts';

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
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;
export type ElementForTag<T extends string> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;
export interface CallbackEvent<T extends string> {
  currentTarget: ElementForTag<T>;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: ElementForTag<T> | null;
}

declare const tagName$1 = 's-switch';
/**
 * Allows merchants to toggle a setting on or off.
 * @publicDocs
 */
export interface SwitchJSXProps
  extends Pick<
    SwitchProps,
    | 'value'
    | 'defaultChecked'
    | 'disabled'
    | 'accessibilityLabel'
    | 'checked'
    | 'label'
    | 'details'
    | 'error'
    | 'labelAccessibilityVisibility'
  > {
  /**
   * A string value attached to the element.
   *
   * Use `checked` for the switch state. A string `value` stays attached to the
   * element and can be read back in event callbacks; it doesn't affect the switch
   * state and isn't submitted with any form.
   */
  value?: SwitchProps['value'];
  /**
   * Whether the switch is on.
   *
   * When `checked` is set, update it from `onChange` or `onInput` to keep the
   * switch controlled. When `checked` isn't set, the switch manages its own
   * state, starting from `defaultChecked`.
   *
   * @default false
   */
  checked?: SwitchProps['checked'];
  /**
   * Whether the switch is on when it first renders.
   *
   * Applies only to the initial render; later changes to `defaultChecked` are
   * ignored. Use `checked` to control the state after the first render.
   *
   * @default false
   */
  defaultChecked?: SwitchProps['defaultChecked'];
  /**
   * Callback when the user toggles the switch. Fires together with `onChange`,
   * after it. Read the new state from `event.currentTarget.checked`.
   */
  onInput?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
  /**
   * Callback when the user toggles the switch. Fires together with `onInput`;
   * `onChange` fires first. Read the new state from `event.currentTarget.checked`.
   */
  onChange?: ((event: CallbackEvent<typeof tagName$1>) => void) | null;
}

declare const tagName = 's-switch';
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<SwitchJSXProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<SwitchJSXProps>;
    }
  }
}

export {tagName};
export type {SwitchJSXProps};

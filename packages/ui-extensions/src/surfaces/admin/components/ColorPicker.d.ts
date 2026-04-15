/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ColorPickerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/** Used when an element does not have children. */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /** Assigns a unique key to this element. */
  key?: preact.Key;
  /** Assigns a ref (generally from `useRef()`) to this element. */
  ref?: preact.Ref<TClass>;
  /** Assigns this element to a parent's slot. */
  slot?: Lowercase<string>;
}

/**
 * Properties for rendering a color picker that provides a visual interface for selecting colors with optional transparency control.
 * @publicDocs
 */
export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
/**
 * A visual color picker component that allows users to select colors from a color spectrum interface.
 */
declare class ColorPicker extends BaseClass implements ColorPickerProps {
  /**
   * Whether the color picker includes an alpha (transparency) channel for selecting semi-transparent colors.
   *
   * @default false
   */
  accessor alpha: boolean;
  /**
   * The callback that's triggered when the selected color changes and the picker loses focus.
   */
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  /**
   * The callback that's triggered when the selected color changes as the user interacts with the picker.
   */
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  /**
   * The name of the picker, used when submitting form data.
   */
  accessor name: string;
  /**
   * The initial color value when the picker first renders, formatted as a hex color string (e.g., `#FF0000` or `#FF0000FF` with alpha).
   */
  accessor defaultValue: string;
  /**
   * The current color value, formatted as a hex color string (e.g., `#FF0000` or `#FF0000FF` with alpha).
   */
  get value(): string;
  set value(value: string);
  /** @private */
  formResetCallback(): void;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ColorPicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ColorPickerJSXProps & PreactBaseElementProps<ColorPicker>;
    }
  }
}

declare const tagName = 's-color-picker';
/**
 * The JSX props interface for the color picker component when used in React/Preact.
 * @publicDocs
 */
export interface ColorPickerJSXProps
  extends Partial<ColorPickerProps>,
    Pick<
      ColorPickerProps$1,
      'id' | 'alpha' | 'value' | 'defaultValue' | 'name'
    > {
  /**
   * A callback that's triggered when the selected color changes as the user interacts with the picker.
   */
  onInput?: (event: CallbackEvent<typeof tagName>) => void | null;
  /**
   * A callback that's triggered when the selected color changes and the picker loses focus.
   */
  onChange?: (event: CallbackEvent<typeof tagName>) => void | null;
}

export {ColorPicker};
export type {ColorPickerJSXProps};

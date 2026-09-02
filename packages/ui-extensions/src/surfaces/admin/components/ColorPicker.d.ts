/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ColorPickerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * Configure the following properties on the color picker component.
 */
export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {
  /**
   * The currently selected color value. Accepts multiple input formats:
   *
   * - Hex: `#RGB`, `#RRGGBB`, `#RRGGBBAA` (3, 6, or 8 digits)
   * - RGB/RGBA: `rgb(255, 0, 0)` or `rgb(255 0 0)` (comma or space-separated)
   * - HSL/HSLA: `hsl(0, 100%, 50%)` or `hsl(0 100% 50%)`
   *
   * Returns an empty string if the value is invalid. The `change` event always emits values in hex format.
   */
  value: Required<ColorPickerProps$1>['value'];
  /**
   * The initial color value when the field first loads. Unlike `placeholder`, this is a real value that the user can edit and that gets submitted with the form. Once the user starts interacting, their input replaces it. Changing this property after the field has loaded has no effect. To update the field value at any time, use `value` instead.
   */
  defaultValue: Required<ColorPickerProps$1>['defaultValue'];
  /**
   * Whether to enable alpha (transparency) channel selection in the color picker, allowing users to choose semi-transparent colors.
   *
   * @default false
   */
  alpha: Required<ColorPickerProps$1>['alpha'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare const internals: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
/**
 * Configure the following properties on the color picker component.
 * @publicDocs
 */
declare class ColorPicker extends BaseClass implements ColorPickerProps {
  accessor alpha: boolean;
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  /**
   * The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.
   */
  accessor name: string;
  accessor defaultValue: string;
  get value(): string;
  set value(value: string);
  /**
   * A callback that fires when the containing form is reset (using the form's `reset()` method or a reset button). When triggered, the component's `value` reverts to its `defaultValue`.
   */
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
export interface ColorPickerJSXProps
  extends Partial<ColorPickerProps>,
    Pick<
      ColorPickerProps$1,
      'id' | 'alpha' | 'value' | 'defaultValue' | 'name'
    > {
  onInput?: (event: CallbackEvent<typeof tagName>) => void | null;
  onChange?: (event: CallbackEvent<typeof tagName>) => void | null;
}

export {ColorPicker};
export type {ColorPickerJSXProps};

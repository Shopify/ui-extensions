/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ColorPickerProps$1, ComponentChildren} from './shared.d.ts';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
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

export interface ColorPickerProps
  extends Required<
    Pick<ColorPickerProps$1, 'id' | 'alpha' | 'value' | 'defaultValue' | 'name'>
  > {}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren;
  styles?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass$1: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass$1 {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  setAttribute(name: string, value: string): void;
  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

declare const internals: unique symbol;
declare class BaseClass extends PreactCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
declare class ColorPicker extends BaseClass implements ColorPickerProps {
  accessor alpha: boolean;
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  accessor name: string;
  accessor defaultValue: string;
  get value(): string;
  set value(value: string);
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

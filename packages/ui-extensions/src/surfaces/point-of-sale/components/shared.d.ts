/** VERSION: 0.0.0 **/

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />

export type CallbackEvent<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> = TEvent & {
  currentTarget: HTMLElementTagNameMap[TTagName];
};

export type CallbackEventListener<
  TTagName extends keyof HTMLElementTagNameMap,
  TEvent extends Event = Event,
> =
  | (EventListener & {
      (event: CallbackEvent<TTagName, TEvent>): void;
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

/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => preact.ComponentChild;
  styles?: Styles;
};

/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
export declare abstract class PreactCustomElement extends BaseClass {
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
}

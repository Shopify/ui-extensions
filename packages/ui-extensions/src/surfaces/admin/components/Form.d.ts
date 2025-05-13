/** VERSION: 0.51.2 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ComponentChild} from './shared.d.ts';

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
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
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
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

export interface FormProps {}
declare class Form extends PreactCustomElement implements FormProps {
  constructor();
  accessor onsubmit: ((event: ExtendableEvent) => void) | null;
  accessor onreset: CallbackEventListener<typeof tagName> | null;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Form;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: FormJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

declare const tagName = 's-form';
export interface ExtendableEvent extends CallbackEvent<typeof tagName> {
  waitUntil(f: Promise<unknown>): void;
}
export interface FormJSXProps extends Partial<FormProps> {
  id?: string;
  /**
   * A callback that is run when the form is submitted.
   */
  onSubmit?: ((event: ExtendableEvent) => void) | null;
  /**
   * A callback that is run when the form is reset.
   */
  onReset?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Form};
export type {FormJSXProps};

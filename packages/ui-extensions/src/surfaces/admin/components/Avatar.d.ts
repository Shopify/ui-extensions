/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {AvatarProps$1, ComponentChildren} from './shared.d.ts';

export interface AvatarProps
  extends Required<Pick<AvatarProps$1, 'initials' | 'src' | 'alt' | 'size'>> {
  size: Extract<
    AvatarProps$1['size'],
    'small-200' | 'small' | 'base' | 'large' | 'large-200'
  >;
}

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

declare class Avatar extends PreactCustomElement implements AvatarProps {
  accessor initials: AvatarProps['initials'];
  accessor src: AvatarProps['src'];
  accessor size: AvatarProps['size'];
  accessor alt: AvatarProps['alt'];
  accessor onload: CallbackEventListener<typeof tagName> | null;
  accessor onerror: OnErrorEventHandler;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Avatar;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AvatarJSXProps & PreactBaseElementProps<Avatar>;
    }
  }
}

declare const tagName = 's-avatar';
export interface AvatarJSXProps
  extends Partial<AvatarProps>,
    Pick<AvatarProps$1, 'id'> {
  onLoad?: () => void;
  onError?: () => void;
}

export {Avatar};
export type {AvatarJSXProps};

/** VERSION: 1.8.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  MenuProps$1,
  ComponentChild,
  InteractionProps,
} from './shared.d.ts';

export interface MenuProps
  extends Required<Pick<MenuProps$1, 'id' | 'accessibilityLabel'>> {
  /**
   * @implementation only accepts `s-button` and `s-section`
   */
  chilren?: ComponentChild;
}

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

/**
 * Shared symbols for overlay control functionality.
 * These symbols are used by components that implement overlay behavior
 * (like Popover, Tooltip, etc.) to communicate with the overlay control system.
 */
declare const overlayCommand: unique symbol;
declare const overlayHidden: unique symbol;
declare const overlayActivator: unique symbol;

declare class PreactOverlayElement extends PreactCustomElement {
  constructor(renderImpl: RenderImpl);
  /** @private */
  [overlayHidden]: boolean;
  /** @private */
  [overlayActivator]: HTMLElement | null | undefined;
  /** @private */
  [overlayCommand](command: InteractionProps['command']): void;
}

declare class Menu extends PreactOverlayElement implements MenuProps {
  accessor accessibilityLabel: string;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Menu;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        HTMLAttributes<HTMLElement>,
        Extract<keyof HTMLAttributes<HTMLElement>, `on${Capitalize<string>}`>
      > &
        MenuJSXProps;
    }
  }
}

declare const tagName = 's-menu';
export interface MenuJSXProps
  extends Partial<MenuProps>,
    Pick<MenuProps$1, 'id'> {}

export {Menu};
export type {MenuJSXProps};

/** VERSION: 0.45.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

import type {
  LinkProps$1,
  InteractionProps,
  ComponentChild,
} from './shared.d.ts';

export type RequiredLinkProps = Required<LinkProps$1>;
export interface LinkProps {
  accessibilityLabel: RequiredLinkProps['accessibilityLabel'];
  command: RequiredLinkProps['command'];
  commandFor: RequiredLinkProps['commandFor'];
  download: RequiredLinkProps['download'];
  href: RequiredLinkProps['href'];
  lang: RequiredLinkProps['lang'];
  target: RequiredLinkProps['target'];
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  target: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;

declare const tagName = 's-link';
export interface ReactProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang'> {
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
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

export interface PreactOverlayControlProps
  extends Required<Pick<InteractionProps, 'commandFor'>> {
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
}

declare const Link_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'observedAttributes' | 'prototype'>;
declare class Link extends Link_base implements LinkProps {
  accessor tone: LinkProps['tone'];
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Link;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
    }
  }
}

export {Link};

/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  LinkProps$1,
  InteractionProps,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

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
/** Used when an element has children. */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  children?: preact.ComponentChildren;
}

export type RequiredLinkProps = Required<LinkProps$1>;
export type LinkBaseProps = Required<
  Pick<
    LinkProps$1,
    | 'accessibilityLabel'
    | 'command'
    | 'commandFor'
    | 'interestFor'
    | 'download'
    | 'href'
    | 'lang'
    | 'target'
    | 'tone'
  >
>;
export interface LinkProps extends LinkBaseProps {
  tone: Extract<RequiredLinkProps['tone'], 'auto' | 'neutral' | 'critical'>;
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

export interface PreactOverlayControlProps
  extends Pick<InteractionProps, 'commandFor' | 'interestFor'> {
  /**
   * Sets the action the [command](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#command) should take when this clickable is activated.
   *
   * See the documentation of particular components for the actions they support.
   *
   * - `--auto`: a default action for the target component.
   * - `--show`: shows the target component.
   * - `--hide`: hides the target component.
   * - `--toggle`: toggles the target component.
   *
   * @default '--auto'
   */
  command: Extract<
    InteractionProps['command'],
    '--show' | '--hide' | '--toggle' | '--auto'
  >;
  /**
   * Sets the element the [commandFor](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#commandfor) should act on when this clickable is activated.
   */
  commandFor: Extract<InteractionProps['commandFor'], string>;
  /**
   * Sets the element the [interestFor](https://open-ui.org/components/interest-invokers.explainer/#the-pitch-in-code) should act on when this clickable is activated.
   */
  interestFor: Extract<InteractionProps['interestFor'], string>;
}

declare const LinkBase_base: (abstract new (
  renderImpl: Omit<RenderImpl, 'globalShadowCSS'>,
) => PolarisCustomElement & PreactOverlayControlProps) &
  Pick<typeof PolarisCustomElement, 'prototype' | 'observedAttributes'>;
declare abstract class LinkBase<TTagName extends keyof HTMLElementTagNameMap>
  extends LinkBase_base
  implements
    Pick<
      LinkProps,
      'accessibilityLabel' | 'href' | 'target' | 'download' | 'lang'
    >
{
  accessor accessibilityLabel: LinkProps['accessibilityLabel'];
  accessor href: LinkProps['href'];
  accessor target: LinkProps['target'];
  accessor download: LinkProps['download'];
  accessor lang: LinkProps['lang'];
  accessor onclick: CallbackEventListener<TTagName> | null;
  abstract tone: string;
  constructor(renderImpl: RenderImpl);
}

declare class Link extends LinkBase<typeof tagName> implements LinkProps {
  accessor tone: LinkProps['tone'];
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
      [tagName]: LinkJSXProps & PreactBaseElementPropsWithChildren<Link>;
    }
  }
}

declare const tagName = 's-link';
export interface LinkJSXProps
  extends Partial<LinkProps>,
    Pick<LinkProps$1, 'id' | 'lang' | 'children'> {
  /**
   * The content of the Link.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Link};
export type {LinkJSXProps};

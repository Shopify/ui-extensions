/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  IconProps$1,
  ButtonProps$1,
  IconType,
  InteractionProps,
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

export interface IconProps
  extends Pick<
    IconProps$1,
    'type' | 'tone' | 'color' | 'size' | 'interestFor'
  > {
  /**
   * Specifies the type of icon that will be displayed.
   */
  type: '' | IconType | 'empty';
  tone: Extract<
    IconProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  color: Extract<IconProps$1['color'], 'base' | 'subdued'>;
  size: Extract<IconProps$1['size'], 'small' | 'base'>;
}

export type ButtonOnlyProps = Extract<
  ButtonProps$1,
  {
    type?: unknown;
  }
>;
export type ButtonBaseProps = Required<
  Pick<
    ButtonOnlyProps,
    | 'accessibilityLabel'
    | 'disabled'
    | 'command'
    | 'commandFor'
    | 'icon'
    | 'interestFor'
    | 'lang'
    | 'loading'
    | 'type'
    | 'tone'
    | 'variant'
    | 'target'
    | 'href'
    | 'download'
  >
>;
export interface ButtonProps extends ButtonBaseProps {
  tone: Extract<ButtonProps$1['tone'], 'neutral' | 'critical' | 'auto'>;
  icon: IconProps['type'];
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

declare const Button_base: (abstract new (
  args_0: RenderImpl,
) => PreactCustomElement & PreactOverlayControlProps) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;
declare class Button extends Button_base implements ButtonProps {
  accessor disabled: ButtonProps['disabled'];
  accessor icon: ButtonProps['icon'];
  accessor loading: ButtonProps['loading'];
  accessor variant: ButtonProps['variant'];
  accessor tone: ButtonProps['tone'];
  accessor target: ButtonProps['target'];
  accessor href: ButtonProps['href'];
  accessor download: ButtonProps['download'];
  accessor onclick: CallbackEventListener<typeof tagName> | null;
  accessor onblur: CallbackEventListener<typeof tagName> | null;
  accessor onfocus: CallbackEventListener<typeof tagName> | null;
  accessor type: ButtonProps['type'];
  accessor accessibilityLabel: ButtonProps['accessibilityLabel'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Button;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ButtonJSXProps & PreactBaseElementPropsWithChildren<Button>;
    }
  }
}

declare const tagName = 's-button';
export interface ButtonJSXProps
  extends Partial<ButtonProps>,
    Pick<ButtonProps$1, 'id' | 'children'> {
  /**
   * The content of the Button.
   */
  children?: ComponentChildren;
  onClick?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {Button};
export type {ButtonJSXProps};

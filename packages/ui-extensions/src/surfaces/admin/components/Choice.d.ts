/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {ComponentChildren, ChoiceProps$1} from './shared.d.ts';

export interface ChoiceProps
  extends Required<
    Pick<
      ChoiceProps$1,
      | 'selected'
      | 'defaultSelected'
      | 'disabled'
      | 'accessibilityLabel'
      | 'value'
    >
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

declare class Choice extends PreactCustomElement implements ChoiceProps {
  accessor disabled: ChoiceProps['disabled'];
  get selected(): boolean;
  set selected(selected: ChoiceProps['selected']);
  accessor value: ChoiceProps['value'];
  accessor accessibilityLabel: ChoiceProps['accessibilityLabel'];
  accessor defaultSelected: ChoiceProps['defaultSelected'];
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Choice;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<ChoiceJSXProps, 'details'> &
        PreactBaseElementPropsWithChildren<Choice>;
    }
  }
}

declare const tagName = 's-choice';
export interface ChoiceJSXProps
  extends Partial<ChoiceProps>,
    Pick<ChoiceProps$1, 'id' | 'children' | 'details'> {
  /**
   * Content to use as the choice label.
   *
   * The label is produced by extracting and
   * concatenating the text nodes from the provided content;
   * any markup or element structure is ignored.
   */
  children?: ComponentChildren;
  /**
   * Additional text to provide context or guidance for the input.
   *
   * This text is displayed along with the input and its label
   * to offer more information or instructions to the user.
   *
   * @implementation this content should be linked to the input with an `aria-describedby` attribute.
   */
  details?: ComponentChildren;
}

export {Choice};
export type {ChoiceJSXProps};

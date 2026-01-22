/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ChoiceProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
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

declare class Choice extends PolarisCustomElement implements ChoiceProps {
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
      [tagName]: Omit<ChoiceJSXProps, 'details' | 'secondaryContent'> &
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
  /**
   * Additional content to display below the choice label.
   * Can include rich content like TextFields, Buttons, or other interactive components.
   * Event handlers on React components are preserved.
   */
  secondaryContent?: ComponentChildren;
}

export {Choice};
export type {ChoiceJSXProps};

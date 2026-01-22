/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  OptionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
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

declare class Option extends PolarisCustomElement implements OptionProps {
  accessor selected: OptionProps['selected'];
  accessor defaultSelected: OptionProps['defaultSelected'];
  accessor value: OptionProps['value'];
  accessor disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: OptionJSXProps & PreactBaseElementPropsWithChildren<Option>;
    }
  }
}

declare const tagName = 's-option';
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The content to use as the label.
   */
  children?: ComponentChildren;
}

export {Option};
export type {OptionJSXProps};

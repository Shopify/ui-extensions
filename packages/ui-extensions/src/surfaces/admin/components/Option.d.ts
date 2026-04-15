/** VERSION: 1.64.0 **/
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

/**
 * Properties for rendering a single option within a select dropdown that users can choose from.
 * @publicDocs
 */
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

/**
 * A single option within a select dropdown that users can choose.
 */
declare class Option extends PolarisCustomElement implements OptionProps {
  /**
   * Whether the option is currently selected.
   */
  accessor selected: OptionProps['selected'];
  /**
   * Whether the option should be selected when it's first rendered.
   */
  accessor defaultSelected: OptionProps['defaultSelected'];
  /**
   * The value that's submitted with the form when this option is selected.
   */
  accessor value: OptionProps['value'];
  /**
   * Whether the option is disabled and can't be selected.
   */
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
/**
 * Properties for using the option component in JSX with React-style props.
 * @publicDocs
 */
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The content that's used as the option label, displayed in the dropdown list.
   */
  children?: ComponentChildren;
}

export {Option};
export type {OptionJSXProps};

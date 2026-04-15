/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  OptionGroupProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * Properties for rendering a group of related options within a select dropdown, organized under a shared label.
 * @publicDocs
 */
export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {}

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
 * A group of related options within a select dropdown, displayed with a label.
 */
declare class OptionGroup
  extends PolarisCustomElement
  implements OptionGroupProps
{
  /**
   * Whether all options in the group are disabled and can't be selected.
   */
  accessor disabled: OptionGroupProps['disabled'];
  /**
   * The text that describes what this group of options represents.
   */
  accessor label: OptionGroupProps['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: OptionGroupJSXProps &
        PreactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}

declare const tagName = 's-option-group';
/**
 * Properties for using the option group component in JSX with React-style props.
 * @publicDocs
 */
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
   */
  children?: ComponentChildren;
}

export {OptionGroup};
export type {OptionGroupJSXProps};

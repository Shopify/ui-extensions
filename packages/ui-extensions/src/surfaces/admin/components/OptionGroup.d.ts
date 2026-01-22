/** VERSION: 1.38.0 **/
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

declare class OptionGroup
  extends PolarisCustomElement
  implements OptionGroupProps
{
  accessor disabled: OptionGroupProps['disabled'];
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
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The options a user can select from.
   *
   * Accepts `Option` components.
   */
  children?: ComponentChildren;
}

export {OptionGroup};
export type {OptionGroupJSXProps};

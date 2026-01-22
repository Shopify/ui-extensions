/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  UnorderedListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface UnorderedListProps extends UnorderedListProps$1 {}

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

declare class UnorderedList
  extends PolarisCustomElement
  implements UnorderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: UnorderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: UnorderedListJSXProps &
        PreactBaseElementPropsWithChildren<UnorderedList>;
    }
  }
}

declare const tagName = 's-unordered-list';
export interface UnorderedListJSXProps
  extends Partial<UnorderedListProps>,
    Pick<UnorderedListProps$1, 'id'> {
  /**
   * The items of the UnorderedList.
   *
   * Only ListItems are accepted.
   */
  children?: ComponentChildren;
}

export {UnorderedList};
export type {UnorderedListJSXProps};

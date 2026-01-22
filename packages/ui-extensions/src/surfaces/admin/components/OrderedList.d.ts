/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  OrderedListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface OrderedListProps extends OrderedListProps$1 {}

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

declare class OrderedList
  extends PolarisCustomElement
  implements OrderedListProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: OrderedList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: OrderedListJSXProps &
        PreactBaseElementPropsWithChildren<OrderedList>;
    }
  }
}

declare const tagName = 's-ordered-list';
export interface OrderedListJSXProps
  extends Partial<OrderedListProps>,
    Pick<OrderedListProps$1, 'id'> {
  /**
   * The items of the OrderedList.
   *
   * Only ListItems are accepted.
   */
  children?: ComponentChildren;
}

export {OrderedList};
export type {OrderedListJSXProps};

/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ListItemProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface ListItemProps extends ListItemProps$1 {}

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

declare class ListItem extends PolarisCustomElement implements ListItemProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ListItem;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ListItemJSXProps &
        PreactBaseElementPropsWithChildren<ListItem>;
    }
  }
}

declare const tagName = 's-list-item';
export interface ListItemJSXProps
  extends Partial<ListItemProps>,
    Pick<ListItemProps$1, 'id' | 'children'> {
  /**
   * The content of the ListItem.
   */
  children?: ComponentChildren;
}

export {ListItem};
export type {ListItemJSXProps};

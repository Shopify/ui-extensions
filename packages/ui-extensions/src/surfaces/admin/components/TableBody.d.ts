/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableBodyProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface TableBodyProps extends TableBodyProps$1 {}

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

declare class TableBody extends PolarisCustomElement implements TableBodyProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TableBody;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TableBodyJSXProps &
        PreactBaseElementPropsWithChildren<TableBody>;
    }
  }
}

declare const tagName = 's-table-body';
export interface TableBodyJSXProps
  extends Partial<TableBodyProps>,
    Pick<TableBodyProps$1, 'id' | 'children'> {
  /**
   * The body of the table. May not have any semantic meaning in the Table's `list` variant.
   */
  children?: ComponentChildren;
}

export {TableBody};
export type {TableBodyJSXProps};

/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableRowProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface TableRowProps
  extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {}

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

declare class TableRow extends PolarisCustomElement implements TableRowProps {
  constructor();
  accessor clickDelegate: string;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TableRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TableRowJSXProps &
        PreactBaseElementPropsWithChildren<TableRow>;
    }
  }
}

declare const tagName = 's-table-row';
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id' | 'children'> {
  /**
   * The content of a TableRow, which should be `TableCell` components.
   */
  children?: ComponentChildren;
}

export {TableRow};
export type {TableRowJSXProps};

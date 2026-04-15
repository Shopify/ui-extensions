/** VERSION: 1.64.0 **/
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

/**
 * The properties you can set on a table row component.
 * @publicDocs
 */
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

declare const elementInternals: unique symbol;

/**
 * A component that represents a single row in a table, which contains the data cells.
 */
declare class TableRow extends PolarisCustomElement implements TableRowProps {
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  /**
   * A CSS selector for a child element that should handle clicks on the entire row. When you set this property, clicking anywhere on the row will trigger a click on the element that matches the selector.
   */
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
/**
 * The JSX properties you can set on a table row component.
 * @publicDocs
 */
export interface TableRowJSXProps
  extends Partial<TableRowProps>,
    Pick<TableRowProps$1, 'id' | 'children'> {
  /**
   * The content to display inside the row, which should include table cell components.
   */
  children?: ComponentChildren;
}

export {TableRow};
export type {TableRowJSXProps};

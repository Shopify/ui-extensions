/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableCellProps$1,
  TableHeaderProps,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties you can set on a table cell component.
 * @publicDocs
 */
export interface TableCellProps extends TableCellProps$1 {}

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

declare const headerFormatSymbol: unique symbol;

export type HeaderFormat = Extract<
  TableHeaderProps['format'],
  'base' | 'currency' | 'numeric'
>;

declare const elementInternals: unique symbol;

/**
 * A component that represents a single cell in a table row, which displays data in a format that's determined by its column header.
 */
declare class TableCell extends PolarisCustomElement implements TableCellProps {
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  /** @private */
  get [headerFormatSymbol](): HeaderFormat;
  /** @private */
  set [headerFormatSymbol](format: HeaderFormat);
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TableCell;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TableCellJSXProps &
        PreactBaseElementPropsWithChildren<TableCell>;
    }
  }
}

declare const tagName = 's-table-cell';
/**
 * The JSX properties you can set on a table cell component.
 * @publicDocs
 */
export interface TableCellJSXProps
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id' | 'children'> {
  /**
   * The content to display inside the table cell.
   */
  children?: ComponentChildren;
}

export {TableCell};
export type {TableCellJSXProps};

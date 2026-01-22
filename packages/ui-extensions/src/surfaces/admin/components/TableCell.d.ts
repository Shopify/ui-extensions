/** VERSION: 1.38.0 **/
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

declare class TableCell extends PolarisCustomElement implements TableCellProps {
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
export interface TableCellJSXProps
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id' | 'children'> {
  /**
   * The content of the table cell.
   */
  children?: ComponentChildren;
}

export {TableCell};
export type {TableCellJSXProps};

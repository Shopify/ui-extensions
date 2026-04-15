/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableHeaderProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export type HeaderFormat = Extract<
  TableHeaderProps$1['format'],
  'base' | 'currency' | 'numeric'
>;
/**
 * The properties you can set on a table header component.
 * @publicDocs
 */
export interface TableHeaderProps
  extends Pick<TableHeaderProps$1, 'listSlot' | 'format'> {
  /**
   * The slot where this header's data appears in list view. The options include `primary` for the main content, `secondary` for supporting text, `labeled` for labeled data, `kicker` for small text above the primary content, or `inline` for inline content.
   */
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
  /**
   * The format of the header, which affects how the cell content is aligned and displayed. Use `base` for standard text, `currency` for monetary values, or `numeric` for numbers.
   */
  format: HeaderFormat;
}

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
 * A component that defines a column header in a table, which specifies both the header label and how the column's data should be formatted.
 */
declare class TableHeader
  extends PolarisCustomElement
  implements TableHeaderProps
{
  /** @private */
  [elementInternals]: ElementInternals;
  /**
   * The slot where this header's data appears when the table is shown in list view.
   */
  accessor listSlot: TableHeaderProps['listSlot'];
  /**
   * The format of the header and its corresponding cells.
   */
  accessor format: TableHeaderProps['format'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TableHeader;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TableHeaderJSXProps &
        PreactBaseElementPropsWithChildren<TableHeader>;
    }
  }
}

declare const tagName = 's-table-header';
/**
 * The JSX properties you can set on a table header component.
 * @publicDocs
 */
export interface TableHeaderJSXProps
  extends Partial<TableHeaderProps>,
    Pick<TableHeaderProps$1, 'id' | 'children'> {
  /**
   * The heading of the column when the table uses the `table` variant, and the label of its data when the table uses the `list` variant.
   */
  children?: ComponentChildren;
}

export {TableHeader};
export type {TableHeaderJSXProps};

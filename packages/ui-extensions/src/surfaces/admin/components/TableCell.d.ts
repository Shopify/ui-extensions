/** VERSION: 2.23.0 **/
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
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

export type ReactIntrinsicElementChildren<PreactProps extends object> =
  'children' extends keyof PreactProps
    ? {
        children?: ReactNode;
      }
    : Record<never, never>;
export type ReactIntrinsicElementProps<
  PreactProps extends object,
  ElementType,
> = Omit<PreactProps, 'children' | 'key' | 'ref' | 'slot'> &
  ReactIntrinsicElementChildren<PreactProps> &
  RefAttributes<ElementType> & {
    slot?: Lowercase<string>;
  };
export type ReactIntrinsicElements = {
  [Tag in Exclude<
    Extract<keyof preact$1.createElement.JSX.IntrinsicElements, `s-${string}`>,
    `s-test-${string}`
  >]: ReactIntrinsicElementProps<
    preact$1.createElement.JSX.IntrinsicElements[Tag],
    Tag extends keyof HTMLElementTagNameMap
      ? HTMLElementTagNameMap[Tag]
      : HTMLElement
  >;
};
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements extends ReactIntrinsicElements {}
  }
}

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 */
export interface TableCellProps extends TableCellProps$1 {
  /**
   * The content displayed within the table cell, which represents a single data point in the table's grid structure.
   */
  children?: TableCellProps$1['children'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Base props for Preact custom elements without children support. Includes common properties like key, ref, and slot for elements that don't accept child content.
 * @publicDocs
 */
export interface PreactBaseElementProps<TClass extends HTMLElement> {
  /**
   * A unique identifier for this element, used by the virtual DOM to efficiently track and update elements in lists.
   * Essential for maintaining component state and optimizing re-renders when lists change.
   */
  key?: preact.Key;
  /**
   * A reference to access the underlying DOM element directly.
   * Typically created using `useRef()` to interact with the element imperatively or measure its properties.
   */
  ref?: preact.Ref<TClass>;
  /**
   * The named slot to which this element is assigned in the parent component's shadow DOM.
   *
   * Used for advanced component composition with web components.
   */
  slot?: Lowercase<string>;
}
/**
 * Base props for Preact custom elements with children support. Extends PreactBaseElementProps with the ability to render child elements.
 * @publicDocs
 */
export interface PreactBaseElementPropsWithChildren<TClass extends HTMLElement>
  extends PreactBaseElementProps<TClass> {
  /**
   * The child elements to be rendered within this component.
   */
  children?: preact.ComponentChildren;
}

declare const headerFormatSymbol: unique symbol;

/**
 * Represents the format options for table headers that control styling and alignment of column content.
 *
 * Available values:
 * - `base`: Standard format for text columns
 * - `currency`: Right-aligned format for monetary values
 * - `numeric`: Right-aligned format for numeric values
 * @publicDocs
 */
export type HeaderFormat = Extract<
  TableHeaderProps['format'],
  'base' | 'currency' | 'numeric'
>;

declare const elementInternals: unique symbol;

/**
 * The table cell component represents a single data cell within a table row. Use table cell as a child of table row to display individual data values, with each cell corresponding to a column in the table.
 *
 * Table cell automatically inherits styling and alignment from its parent table structure and supports text content or other inline components.
 * @publicDocs
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
export interface TableCellJSXProps
  extends Partial<TableCellProps>,
    Pick<TableCellProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the table cell, which represents a single data point in the table's grid structure.
   */
  children?: ComponentChildren;
}

export {TableCell};
export type {TableCellJSXProps};

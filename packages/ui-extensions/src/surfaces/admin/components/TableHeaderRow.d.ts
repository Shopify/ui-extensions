/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableHeaderRowProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 */
export interface TableHeaderRowProps extends TableHeaderRowProps$1 {
  /**
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: TableHeaderRowProps$1['children'];
}

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

declare const elementInternals: unique symbol;

/**
 * The table header row component represents the header row of a table, containing column headings. Use table header row as the first child of table (before table body) to define the table structure and provide column labels.
 *
 * Table header row must contain table header components for each column. These headers provide context for the data columns and can support sorting functionality.
 * @publicDocs
 */
declare class TableHeaderRow
  extends PolarisCustomElement
  implements TableHeaderRowProps
{
  /** @private */
  [elementInternals]: ElementInternals;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: TableHeaderRow;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TableHeaderRowJSXProps &
        PreactBaseElementPropsWithChildren<TableHeaderRow>;
    }
  }
}

declare const tagName = 's-table-header-row';
export interface TableHeaderRowJSXProps
  extends Partial<TableHeaderRowProps>,
    Pick<TableHeaderRowProps$1, 'id' | 'children'> {
  /**
   * The header cells that define the columns of the table.
   * Only accepts table header components as children, with each header representing a column and providing its label.
   */
  children?: ComponentChildren;
}

export {TableHeaderRow};
export type {TableHeaderRowJSXProps};

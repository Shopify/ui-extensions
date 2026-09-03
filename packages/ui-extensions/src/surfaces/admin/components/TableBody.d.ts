/** VERSION: 2.23.0 **/
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
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 */
export interface TableBodyProps extends TableBodyProps$1 {
  /**
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: TableBodyProps$1['children'];
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
 * The table body component represents the main content area of a table, containing the data rows. Use table body as a child of table to structure your table data, with each table row within the body representing a single record or entry.
 *
 * Table body must contain table row components, which in turn contain table cell components for the actual data values.
 * @publicDocs
 */
declare class TableBody extends PolarisCustomElement implements TableBodyProps {
  /** @private */
  [elementInternals]: ElementInternals;
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
   * The rows containing the main data content of the table.
   * In the `table` variant, this represents the semantic table body. In the `list` variant, this might not have semantic meaning but still contains the data rows.
   */
  children?: ComponentChildren;
}

export {TableBody};
export type {TableBodyJSXProps};

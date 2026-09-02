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
  TableRowProps$1,
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
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 */
export interface TableRowProps
  extends Pick<TableRowProps$1, 'children' | 'clickDelegate'> {
  /**
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
   */
  children?: TableRowProps$1['children'];
  /**
   * The ID of an interactive element, such as `s-link`, in the row that will be the target of the click when the row is clicked.
   * This is the primary action for the row; it should not be used for secondary actions.
   *
   * This is a click-only affordance, and does not introduce any keyboard or screen reader affordances.
   * Which is why the target element must be in the table; so that keyboard and screen reader users can interact with it normally.
   *
   * @implementation no focus or keyboard affordances are introduced by this property. No aria attributes need to be added to the table row.
   * @implementation the row and/or delegate should have some affordance that indicates it is clickable. This may be a background color, a border, or a hover effect
   */
  clickDelegate?: TableRowProps$1['clickDelegate'];
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
 * The table row component represents a single row of data within a table body. Use table row as a child of table body to structure individual records or entries in the table.
 *
 * Table row must contain table cell components, with each cell representing a data value for the corresponding column. The number of cells should match the number of headers in the table.
 * @publicDocs
 */
declare class TableRow extends PolarisCustomElement implements TableRowProps {
  /** @private */
  [elementInternals]: ElementInternals;
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
   * The data cells displayed within this table row, with each cell containing content for its corresponding column.
   * Only accepts table cell components as children.
   */
  children?: ComponentChildren;
}

export {TableRow};
export type {TableRowJSXProps};

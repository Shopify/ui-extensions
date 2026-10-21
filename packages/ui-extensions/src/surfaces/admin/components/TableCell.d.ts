/** VERSION: 2.39.0 **/
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

/**
 * What a component wants to hear about its own light DOM.
 *
 * Structure — children added, removed or moved — is always observed. The
 * `attributes` list is the part worth thinking about: the observer is a
 * `subtree` one, so every entry makes every descendant's writes to that
 * attribute wake this component up. List the attributes the component
 * actually reads off its children and nothing else.
 */
export interface LightDomObservation {
  /**
   * Descendant attributes that should call {@link lightDomChanged}. Omit it to
   * hear about structure only.
   *
   * `'all'` observes every attribute on every descendant, which is only right
   * for a component that mirrors arbitrary child markup it cannot enumerate:
   * Menu copies an item's `innerHTML`, and the quick picker field clones the
   * elements slotted into an option. Anything else should list its attributes.
   */
  attributes?: ReadonlyArray<string> | 'all';
}
/**
 * The observer installed for {@link observeLightDom}. Deliberately not
 * exported: nothing outside this module can name the symbol, so nothing
 * outside this module can reach the observer.
 */
declare const lightDomObserver: unique symbol;
/**
 * Static opt-in to light-DOM observation — see {@link LightDomObservation}.
 *
 * ```ts
 * static [observeLightDom]: LightDomObservation = { attributes: ['selected'] };
 * ```
 *
 * A Symbol key keeps this off the element's public API (and out of the
 * generated docs and definitions) while still letting subclasses in other
 * files declare it.
 */
declare const observeLightDom: unique symbol;
/**
 * Called once per batch of light-DOM mutations a component opted into with
 * {@link observeLightDom}. Defaults to a re-render; override it with a Symbol
 * key, the same way the opt-in is declared, to do more.
 */
declare const lightDomChanged: unique symbol;
declare class PolarisCustomElement extends PreactCustomElement {
  /**
   * Opt in to light-DOM observation. Undefined means no observer is created.
   * @private
   */
  static [observeLightDom]?: LightDomObservation;
  /** @private */
  [lightDomObserver]?: MutationObserver;
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /**
   * Runs when the light DOM this component opted into observing changes.
   * @private
   */
  [lightDomChanged](): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
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
declare const primaryCellSymbol: unique symbol;

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
  /** @private */
  get [primaryCellSymbol](): boolean;
  /** @private */
  set [primaryCellSymbol](primary: boolean);
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

/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableProps$1,
  TableHeaderProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as _shopify_admin_web_component_foundations from '@shopify/admin-web-component-foundations';

/**
 * The properties you can set on a table component.
 * @publicDocs
 */
export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage' | 'variant'
    >
  > {
  /**
   * The display variant of the table. Use `list` to force a list view, or `auto` to automatically switch between table and list based on the available space.
   */
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

/**
 * The format type for a table header, which determines how the cell content is displayed.
 * @publicDocs
 */
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

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
export type ActualTableVariant = 'table' | 'list';
declare const elementInternals: unique symbol;

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
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

/**
 * A component that displays data in a structured table format that automatically adapts to the available space.
 */
declare class Table extends PolarisCustomElement implements TableProps {
  /** @private */
  [elementInternals]: ElementInternals;
  /**
   * The display variant of the table.
   */
  accessor variant: TableProps['variant'];
  /**
   * Whether the table is currently in a loading state.
   */
  accessor loading: TableProps['loading'];
  /**
   * Whether the pagination controls are displayed.
   */
  accessor paginate: TableProps['paginate'];
  /**
   * Whether there's a previous page of data that the user can navigate to.
   */
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  /**
   * Whether there's a next page of data that the user can navigate to.
   */
  accessor hasNextPage: TableProps['hasNextPage'];
  /**
   * The event listener that's called when the user navigates to the previous page.
   */
  accessor onpreviouspage: CallbackEventListener<typeof tagName> | null;
  /**
   * The event listener that's called when the user navigates to the next page.
   */
  accessor onnextpage: CallbackEventListener<typeof tagName> | null;
  /**
   * @private
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: _shopify_admin_web_component_foundations.AddedContext<ActualTableVariant>;
  /** @private */
  [tableHeadersSharedDataSymbol]: _shopify_admin_web_component_foundations.AddedContext<
    {
      listSlot: TableHeaderProps['listSlot'];
      textContent: string;
      format: HeaderFormat;
    }[]
  >;

  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Table;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<TableJSXProps, 'filters'> &
        PreactBaseElementPropsWithChildren<Table>;
    }
  }
}

declare const tagName = 's-table';
/**
 * The JSX properties you can set on a table component.
 * @publicDocs
 */
export interface TableJSXProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'children' | 'onNextPage' | 'onPreviousPage'> {
  /**
   * The content to display inside the table, which should include table header row, table body, and table row components.
   */
  children?: ComponentChildren;
  /**
   * Additional filters to display in the table. For example, you can use the search field component to filter the table data.
   */
  filters?: ComponentChildren;
}

export {Table};
export type {TableJSXProps};

/** VERSION: undefined **/
/* eslint-disable import-x/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import-x/namespace */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {Key, Ref, ComponentChild} from './components-shared.d.ts';

export type ComponentChildren = any;
/**
 * Used when an element does not have children.
 */
export interface BaseElementProps<TClass = HTMLElement> {
  key?: Key;
  ref?: Ref<TClass>;
  slot?: Lowercase<string>;
}
/**
 * Used when an element has children.
 */
export interface BaseElementPropsWithChildren<TClass = HTMLElement>
  extends BaseElementProps<TClass> {
  children?: ComponentChildren;
}
export type IntrinsicElementProps<T> = T &
  BaseElementPropsWithChildren<T & HTMLElement>;
export type HtmlElementTagNameProps<T> = T & HTMLElement;
export type ElementForTag<T extends string> =
  T extends keyof HTMLElementTagNameMap
    ? HTMLElementTagNameMap[T]
    : HTMLElement;
export interface CallbackEvent<T extends string> {
  currentTarget: ElementForTag<T>;
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
  detail?: any;
  eventPhase: number;
  target: ElementForTag<T> | null;
}

declare const tagName = 's-pos-list';
/**
 * A row supplied to `s-pos-list`. Rows are plain data; every member other than `id` and
 * `templateFor` is available to the row's item template through `{{path}}`, `bind:prop`,
 * and `{{#if path}}` bindings.
 */
export interface POSListRow {
  /** A unique identifier for the row. Keys virtualization and identity across incremental loads. */
  id: string;
  /** The `templateId` of the item template that renders this row. */
  templateFor: string;
  /** Any additional data the row's template reads. */
  [field: string]: unknown;
}
/**
 * The event fired when a `button` row is activated. `detail.item` is the activated row and
 * `detail.index` its position in `rows`. POS delivers the row data in `detail` because its
 * RemoteDOM bridge forwards only `detail` when dispatching an event to the extension; the shared
 * `POSListRowClickEvent` contract declares `item` and `index` on the event, which POS exposes once
 * the bridge forwards custom event properties.
 */
export type POSListRowClickEvent = CallbackEvent<typeof tagName> & {
  detail: {
    item: POSListRow;
    index: number;
  };
};
/**
 * Displays a virtualized list of rows rendered from plain data and raw item-template markup
 * parsed and compiled in POS.
 *
 * @publicDocs
 */
export interface POSListJSXProps {
  /** A unique identifier for the element. */
  id?: string;
  /**
   * The rows displayed in the list. Each row names the item template that renders it through
   * `templateFor`.
   *
   * @default []
   */
  rows?: POSListRow[];
  /**
   * Raw `<s-pos-list-item>` markup parsed in POS, not an extension-compiled AST.
   * Omitted, cleared, empty, or whitespace-only source renders no rows and reports no missing
   * templates. The header and loading indicator can still render.
   * Invalid template markup is reported by the POS app after it receives the string.
   * POS caches compiled templates while the source and component definitions are unchanged.
   * The source may contain at most 65,536 UTF-16 code units, 64 element levels, and 2,048 markup nodes.
   *
   * @default undefined
   */
  itemTemplates?: string;
  /**
   * Whether additional rows are being loaded. Renders a progress indicator after the last row.
   *
   * @default false
   */
  loadingMore?: boolean;
  /**
   * Callback when a `button` row is activated. `event.detail.item` is the row and
   * `event.detail.index` its position in `rows`. Rows rendered by a `text` template never fire it.
   */
  onRowClick?: ((event: POSListRowClickEvent) => void) | null;
  /** Callback when the list has scrolled near its end and more rows should be loaded. */
  onLoadMore?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /** Content displayed before the rows as part of the list's scrollable content. */
  header?: ComponentChild;
}
export type ElementProps = Omit<POSListJSXProps, 'header'>;
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: HtmlElementTagNameProps<ElementProps>;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: IntrinsicElementProps<ElementProps>;
    }
  }
}

export {tagName};
export type {ElementProps, POSListJSXProps, POSListRow, POSListRowClickEvent};

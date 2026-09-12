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

/**
 * The serialized template AST carried by `s-pos-list`'s `itemTemplates`
 * property.
 *
 * Templates are authored in the extension sandbox with the `posListTemplate`
 * tagged template, compiled once into this plain-JSON shape, and shipped
 * across the bridge as a single property. The host hydrates the AST per
 * visible row, so no RemoteDOM nodes exist for template content and no
 * extension code runs while scrolling.
 */
/** A literal string piece or a row-field lookup within interpolated text. */
export type POSListTemplateSegment =
  | string
  | {
      path: string;
    };
export type POSListTemplateProp =
  /** A static value. Web component attributes yield strings, or `true` when valueless. */
  | {
      kind: 'literal';
      value: string | boolean;
    }
  /** The row field at `path`, passed through with its original type (`bind:prop="path"`). */
  | {
      kind: 'field';
      path: string;
    }
  /** A string built from literal pieces and `{{path}}` lookups. */
  | {
      kind: 'segments';
      segments: POSListTemplateSegment[];
    };
export type POSListTemplateNode =
  | {
      kind: 'element';
      tag: string;
      props?: Record<string, POSListTemplateProp>;
      children?: POSListTemplateNode[];
    }
  /** Literal text, possibly interpolated with `{{path}}` lookups. */
  | {
      kind: 'text';
      segments: POSListTemplateSegment[];
    }
  /** `{{#if path}}…{{/if}}`: children render only when the field is truthy. */
  | {
      kind: 'if';
      path: string;
      children: POSListTemplateNode[];
    };
/** One `<s-pos-list-item templateId="…">` root. */
export interface POSListItemTemplate {
  templateId: string;
  /** `button` rows fire `rowclick`; `text` rows are static content. */
  type: 'button' | 'text';
  children: POSListTemplateNode[];
}
export interface POSListTemplates {
  version: 1;
  templates: POSListItemTemplate[];
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
 * `detail.index` its position in `rows`.
 */
export type POSListRowClickEvent = CallbackEvent<typeof tagName> & {
  detail: {
    item: POSListRow;
    index: number;
  };
};
/**
 * Displays a virtualized list of rows rendered from plain data and item templates compiled with
 * `posListTemplate`.
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
   * The compiled item templates, one per `<s-pos-list-item>`, produced by `posListTemplate`.
   * A row whose `templateFor` matches no template renders nothing.
   */
  itemTemplates?: {
    version: POSListTemplates['version'];
    templates: POSListTemplates['templates'];
  };
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

/** VERSION: 1.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableProps$1,
  TableHeaderProps$1,
} from './shared.d.ts';

export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage' | 'variant'
    >
  > {
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

export type HeaderFormat = Extract<
  TableHeaderProps$1['format'],
  'base' | 'currency' | 'numeric'
>;
export interface TableHeaderProps
  extends Pick<TableHeaderProps$1, 'listSlot' | 'format'> {
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
  format: HeaderFormat;
}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChildren;
  styles?: Styles;
};
export interface ActivationEventEsque {
  shiftKey: boolean;
  metaKey: boolean;
  ctrlKey: boolean;
  button: number;
}
export interface ClickOptions {
  /**
   * The event you want to influence the synthetic click.
   */
  sourceEvent?: ActivationEventEsque;
}
/**
 * Base class for creating custom elements with Preact.
 * While this class could be used in both Node and the browser, the constructor will only be used in the browser.
 * So we give it a type of HTMLElement to avoid typing issues later where it's used, which will only happen in the browser.
 */
declare const BaseClass: typeof globalThis.HTMLElement;
declare abstract class PreactCustomElement extends BaseClass {
  /** @private */
  static get observedAttributes(): string[];
  constructor({
    styles,
    ShadowRoot: renderFunction,
    delegatesFocus,
    ...options
  }: RenderImpl);

  /** @private */
  setAttribute(name: string, value: string): void;
  /** @private */
  attributeChangedCallback(name: string): void;
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
  /**
   * Queue a run of the render function.
   * You shouldn't need to call this manually - it should be handled by changes to @property values.
   * @private
   */
  queueRender(): void;
  /**
   * Like the standard `element.click()`, but you can influence the behavior with a `sourceEvent`.
   *
   * For example, if the `sourceEvent` was a middle click, or has particular keys held down,
   * components will attempt to produce the desired behavior on links, such as opening the page in the background tab.
   * @private
   * @param options
   */
  click({sourceEvent}?: ClickOptions): void;
}

export interface Context<T> {
  readonly defaultValue: T;
}
declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  get value(): T;
  set value(value: T);
}

/**
 * A callback which is provided by a context requester and is called with the value satisfying the request.
 * This callback can be called multiple times by context providers as the requested value is changed.
 */
export type ContextCallback<T> = (value: T) => void;
/**
 * An event fired by a context requester to signal it desires a named context.
 *
 * A provider should inspect the `context` property of the event to determine if it has a value that can
 * satisfy the request, calling the `callback` with the requested value if so.
 */
declare class ContextRequestEvent<T> extends Event {
  readonly context: Context<T>;
  readonly callback: ContextCallback<T>;
  constructor(context: Context<T>, callback: ContextCallback<T>);
}
declare global {
  interface HTMLElementEventMap {
    /**
     * A 'context-request' event can be emitted by any element which desires
     * a context value to be injected by an external provider.
     */
    'context-request': ContextRequestEvent<unknown>;
  }
}

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
export type ActualTableVariant = 'table' | 'list';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
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

declare class Table extends PreactCustomElement implements TableProps {
  accessor variant: TableProps['variant'];
  accessor loading: TableProps['loading'];
  accessor paginate: TableProps['paginate'];
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  accessor hasNextPage: TableProps['hasNextPage'];
  accessor onpreviouspage: CallbackEventListener<typeof tagName> | null;
  accessor onnextpage: CallbackEventListener<typeof tagName> | null;
  /**
   * @private
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
  /** @private */
  [tableHeadersSharedDataSymbol]: AddedContext<
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
export interface TableJSXProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'children' | 'onNextPage' | 'onPreviousPage'> {
  /**
   * The content of the Table.
   */
  children?: ComponentChildren;
  /**
   * Additional filters to display in the table. For example, the `s-search-field` component can be used to filter the table data.
   */
  filters?: ComponentChildren;
}

export {Table};
export type {TableJSXProps};

/** VERSION: 0.45.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

import type {ComponentChild, TableHeaderProps$1} from './shared.d.ts';

export interface TableProps
  extends Required<
    Pick<
      TableProps$1,
      'loading' | 'paginate' | 'hasPreviousPage' | 'hasNextPage'
    >
  > {
  variant: Extract<TableProps$1['variant'], 'list' | 'auto'>;
}

declare const tagName = 's-table';
export interface ReactProps
  extends Partial<TableProps>,
    Pick<TableProps$1, 'id' | 'onNextPage' | 'onPreviousPage'> {
  filters?: ComponentChild;
}

export interface TableHeaderProps {
  listSlot: Extract<
    TableHeaderProps$1['listSlot'],
    'primary' | 'secondary' | 'labeled' | 'kicker' | 'inline'
  >;
}

export type Styles = string;
export type RenderImpl = Omit<ShadowRootInit, 'mode'> & {
  ShadowRoot: (element: any) => ComponentChild;
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

declare class AddedContext<T> extends EventTarget {
  constructor(defaultValue: T);
  get value(): T;
  set value(value: T);
}

declare const actualTableVariantSymbol: unique symbol;
declare const tableHeadersSharedDataSymbol: unique symbol;
export type ActualTableVariant = 'table' | 'list';

export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  target: HTMLElementTagNameMap[T];
};
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;

declare class Table extends PreactCustomElement implements TableProps {
  accessor variant: TableProps['variant'];
  accessor loading: TableProps['loading'];
  accessor paginate: TableProps['paginate'];
  accessor hasPreviousPage: TableProps['hasPreviousPage'];
  accessor hasNextPage: TableProps['hasNextPage'];
  accessor onpreviouspage: CallbackEventListener<typeof tagName> | null;
  accessor onnextpage: CallbackEventListener<typeof tagName> | null;
  /**
   * The actual table variant, which is either 'table' or 'list'.
   */
  [actualTableVariantSymbol]: AddedContext<ActualTableVariant>;
  [tableHeadersSharedDataSymbol]: AddedContext<
    {
      listSlot: TableHeaderProps['listSlot'];
      textContent: string;
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
      [tagName]: HTMLAttributes<HTMLElement> & ReactProps;
    }
  }
}

export {Table};

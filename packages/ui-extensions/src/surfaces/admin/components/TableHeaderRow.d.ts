/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  TableHeaderRowProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface TableHeaderRowProps extends TableHeaderRowProps$1 {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

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

declare class TableHeaderRow
  extends PolarisCustomElement
  implements TableHeaderRowProps
{
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
   * Contents of the table heading row; children should be `TableHeading` components.
   */
  children?: ComponentChildren;
}

export {TableHeaderRow};
export type {TableHeaderRowJSXProps};

/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  QueryContainerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

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

/**
 * The properties you can set on a query container component.
 * @publicDocs
 */
export interface QueryContainerProps
  extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {}

/**
 * A component that sets up a container query context, which lets child elements style themselves based on the container's size instead of the viewport size.
 */
declare class QueryContainer
  extends PolarisCustomElement
  implements QueryContainerProps
{
  /**
   * The name of the container, which you can reference in CSS container queries.
   */
  accessor containerName: QueryContainerProps['containerName'];
  /** @private */
  static globalStylesApplied: boolean;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: QueryContainer;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: QueryContainerJSXProps &
        PreactBaseElementPropsWithChildren<QueryContainer>;
    }
  }
}

declare const tagName = 's-query-container';
/**
 * The JSX properties you can set on a query container component.
 * @publicDocs
 */
export interface QueryContainerJSXProps
  extends Partial<QueryContainerProps$1>,
    Pick<QueryContainerProps$1, 'id' | 'children'> {
  /**
   * The content to display inside the container.
   */
  children?: ComponentChildren;
}

export {QueryContainer};
export type {QueryContainerJSXProps};

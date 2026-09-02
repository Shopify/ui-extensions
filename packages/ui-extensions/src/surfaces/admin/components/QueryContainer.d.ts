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
  QueryContainerProps$1,
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

/**
 * Configure the following properties on the query container component.
 */
export interface QueryContainerProps
  extends Required<Pick<QueryContainerProps$1, 'id' | 'containerName'>> {
  /**
   * An identifier for this container that you can reference in CSS container queries to apply styles based on this specific container's size.
   *
   * All query container components automatically receive a container name of `s-default`. You can omit the container name in your queries, so `@container (inline-size <= 300px)` is equivalent to `@container s-default (inline-size <= 300px)`.
   *
   * When you provide a custom `containerName`, it's added alongside `s-default`. For example, `containerName="product-card"` results in `s-default product-card` being set on the `container-name` CSS property, allowing you to target this container with `@container product-card (inline-size <= 300px)`.
   *
   * Learn more about the [container-name property](https://developer.mozilla.org/en-US/docs/Web/CSS/container-name).
   *
   * @default ''
   *
   * @implementation You must always have a CSS `container-name` of `s-default` for this component.
   */
  containerName: Required<QueryContainerProps$1>['containerName'];
}

/**
 * Configure the following properties on the query container component.
 * @publicDocs
 */
declare class QueryContainer
  extends PolarisCustomElement
  implements QueryContainerProps
{
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
export interface QueryContainerJSXProps
  extends Partial<QueryContainerProps$1>,
    Pick<QueryContainerProps$1, 'id' | 'children'> {
  /**
   * The content displayed within the query container component, which enables container queries for responsive styling based on the container's size rather than the viewport.
   */
  children?: ComponentChildren;
}

export {QueryContainer};
export type {QueryContainerJSXProps};

/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  EmptyStateProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

export interface EmptyStateProps
  extends Required<Pick<EmptyStateProps$1, 'heading'>> {}

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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the empty state component.
 * @publicDocs
 */
declare class EmptyState
  extends PolarisCustomElement
  implements EmptyStateProps
{
  constructor();
  accessor heading: EmptyStateProps['heading'];
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: EmptyState;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        EmptyStateJSXProps,
        'primaryAction' | 'secondaryActions' | 'graphic' | 'subheading'
      > &
        PreactBaseElementPropsWithChildren<EmptyState>;
    }
  }
}

declare const tagName = 's-empty-state';
export interface EmptyStateJSXProps
  extends Partial<EmptyStateProps>,
    Pick<EmptyStateProps$1, 'id'> {
  /**
   * The main call to action, rendered below the text content. Accepts a single `Button` with a `variant` of `primary`; anything else is ignored with a development warning.
   */
  primaryAction?: ComponentChildren;
  /**
   * An alternative action, rendered beside the primary one. Accepts a single `Button` with a `variant` of `secondary` or `auto` — despite the plural name, only one is rendered.
   */
  secondaryActions?: ComponentChildren;
  /**
   * An illustration or symbol shown above the heading. Accepts a single `Image` or `Icon`, either directly or as the only child of a wrapping element.
   */
  graphic?: ComponentChildren;
  /**
   * Supporting text below the heading, explaining what's missing or what to do next. Accepts `Text` and `Link` components.
   */
  subheading?: ComponentChildren;
}

export {EmptyState};
export type {EmptyStateJSXProps};

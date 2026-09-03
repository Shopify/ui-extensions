/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  SpinnerProps$1,
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
 * Configure the following properties on the spinner component.
 */
export interface SpinnerProps
  extends Required<Pick<SpinnerProps$1, 'accessibilityLabel'>> {
  /**
   * The size of the loading spinner.
   *
   * - `base`: Default size suitable for inline loading indicators or standard UI contexts.
   * - `large`: Larger spinner for more prominent loading states.
   * - `large-100`: Extra large spinner for full-page or emphasized loading states.
   */
  size: Extract<SpinnerProps$1['size'], 'large' | 'large-100' | 'base'>;
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   */
  accessibilityLabel: Required<SpinnerProps$1>['accessibilityLabel'];
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
 * Configure the following properties on the spinner component.
 * @publicDocs
 */
declare class Spinner extends PolarisCustomElement implements SpinnerProps {
  accessor accessibilityLabel: string;
  accessor size: SpinnerProps['size'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Spinner;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SpinnerJSXProps & PreactBaseElementProps<Spinner>;
    }
  }
}

declare const tagName = 's-spinner';
export interface SpinnerJSXProps
  extends Partial<SpinnerProps>,
    Pick<SpinnerProps$1, 'id'> {}

export {Spinner};
export type {SpinnerJSXProps};

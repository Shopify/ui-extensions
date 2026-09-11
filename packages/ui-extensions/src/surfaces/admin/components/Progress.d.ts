/** VERSION: 2.25.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ProgressProps$1,
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
 * Configure the following properties on the progress component.
 */
export interface ProgressProps
  extends Pick<
    ProgressProps$1,
    'accessibilityLabel' | 'max' | 'tone' | 'value'
  > {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey what is progressing.
   */
  accessibilityLabel: Required<ProgressProps$1>['accessibilityLabel'];
  /**
   * How much work the task requires in total. Must be greater than `0`.
   *
   * @default 1
   */
  max: Required<ProgressProps$1>['max'];
  /**
   * The semantic meaning and color treatment of the component.
   *
   * - `auto`: Automatically determined based on context.
   * - `neutral`: General information without specific intent.
   * - `info`: Informational content or helpful tips.
   * - `success`: Positive outcomes or successful states.
   * - `caution`: Advisory notices that need attention.
   * - `warning`: Important warnings about potential issues.
   * - `critical`: Urgent problems or destructive actions.
   *
   * @default 'auto'
   */
  tone: Extract<
    ProgressProps$1['tone'],
    'auto' | 'neutral' | 'info' | 'success' | 'caution' | 'warning' | 'critical'
  >;
  /**
   * How much of the task has been completed, as a number between `0` and `max`.
   *
   * Without a `value` the progress is indeterminate: the task is ongoing with no
   * indication of how long it is expected to take.
   *
   * @default 0
   */
  value: Required<ProgressProps$1>['value'];
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
 * Configure the following properties on the progress component.
 * @publicDocs
 */
declare class Progress extends PolarisCustomElement implements ProgressProps {
  accessor accessibilityLabel: string;
  accessor max: ProgressProps['max'];
  accessor tone: ProgressProps['tone'];
  accessor value: ProgressProps['value'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Progress;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ProgressJSXProps & PreactBaseElementProps<Progress>;
    }
  }
}

declare const tagName = 's-progress';
export interface ProgressJSXProps
  extends Partial<ProgressProps>,
    Pick<ProgressProps$1, 'id'> {}

export {Progress};
export type {ProgressJSXProps};

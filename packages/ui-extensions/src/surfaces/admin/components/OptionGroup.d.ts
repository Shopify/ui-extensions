/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  OptionGroupProps$1,
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
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 */
export interface OptionGroupProps
  extends Required<Pick<OptionGroupProps$1, 'disabled' | 'label'>> {
  /**
   * Whether the options within this group can be selected or not.
   *
   * @default false
   */
  disabled: Required<OptionGroupProps$1>['disabled'];
  /**
   * The user-facing label for this group of options.
   */
  label: Required<OptionGroupProps$1>['label'];
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
 * Represents a group of options within a select component. Use only as a child of `s-select` components.
 * @publicDocs
 */
declare class OptionGroup
  extends PolarisCustomElement
  implements OptionGroupProps
{
  accessor disabled: OptionGroupProps['disabled'];
  accessor label: OptionGroupProps['label'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: OptionGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: OptionGroupJSXProps &
        PreactBaseElementPropsWithChildren<OptionGroup>;
    }
  }
}

declare const tagName = 's-option-group';
export interface OptionGroupJSXProps
  extends Partial<OptionGroupProps>,
    Pick<OptionGroupProps$1, 'id' | 'children'> {
  /**
   * The selectable options displayed in the dropdown list. Accepts option components for individual selectable items within this group.
   */
  children?: ComponentChildren;
}

export {OptionGroup};
export type {OptionGroupJSXProps};

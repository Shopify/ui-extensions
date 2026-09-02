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
  OptionProps$1,
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
 * Represents a single option within a select component. Use only as a child of s-select components.
 */
export interface OptionProps
  extends Required<
    Pick<OptionProps$1, 'disabled' | 'value' | 'selected' | 'defaultSelected'>
  > {}

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
 * Represents a single option within a select component. Use only as a child of s-select components.
 * @publicDocs
 */
declare class Option extends PolarisCustomElement implements OptionProps {
  /**
   * Whether the option is currently selected. Use this for controlled components where you manage the selection state.
   */
  accessor selected: OptionProps['selected'];
  /**
   * The initial selected state for uncontrolled components. Use this when you want the option to start selected but don't need to control its state afterward.
   */
  accessor defaultSelected: OptionProps['defaultSelected'];
  /**
   * The value submitted with the form when this checkbox is checked. If not specified, the default value is "on".
   */
  accessor value: OptionProps['value'];
  /**
   * Whether the checkbox is disabled, preventing user interaction. Disabled checkboxes appear dimmed and their values aren't submitted with forms.
   */
  accessor disabled: OptionProps['disabled'];
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Option;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: OptionJSXProps & PreactBaseElementPropsWithChildren<Option>;
    }
  }
}

declare const tagName = 's-option';
export interface OptionJSXProps
  extends Partial<OptionProps>,
    Pick<OptionProps$1, 'id' | 'children'> {
  /**
   * The text or elements displayed as the option label, which identifies the selectable choice to users in a dropdown or selection list.
   */
  children?: ComponentChildren;
}

export {Option};
export type {OptionJSXProps};

/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ButtonGroupProps$1,
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
 * Configure the following properties on the button group component.
 */
export interface ButtonGroupProps
  extends Required<Pick<ButtonGroupProps$1, 'gap' | 'accessibilityLabel'>> {
  /**
   * A label that describes the purpose or content of the component for assistive technologies like screen readers. Use this to provide additional context when the visible content alone doesn't clearly convey the component's purpose.
   *
   * @implementation Used as a hidden heading or an aria-label on the wrapping element.
   */
  accessibilityLabel: Required<ButtonGroupProps$1>['accessibilityLabel'];
  /**
   * The spacing between buttons in the group.
   *
   * - `base`: Standard spacing that provides clear visual separation between buttons.
   * - `none`: No spacing, creating a connected button group.
   *
   * @default 'base'
   */
  gap: Required<ButtonGroupProps$1>['gap'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare abstract class ButtonGroupBase
  extends PolarisCustomElement
  implements Pick<ButtonGroupProps, 'gap' | 'accessibilityLabel'>
{
  accessor gap: ButtonGroupProps['gap'];
  accessor accessibilityLabel: ButtonGroupProps['accessibilityLabel'];
  constructor(renderImpl: RenderImpl);
  /**
   * Actions whose translucent fill can't paint over a seam, so the neighbour
   * has to be told not to draw it. The foundation resolves the list.
   * @private
   */
  setInertActions(actions: ReadonlyArray<Element>): void;
  /** @private */
  disconnectedCallback(): void;
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
 * Configure the following properties on the button group component.
 * @publicDocs
 */
declare class ButtonGroup extends ButtonGroupBase implements ButtonGroupProps {
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ButtonGroup;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: Omit<
        ButtonGroupJSXProps,
        'primaryAction' | 'secondaryActions'
      > &
        PreactBaseElementPropsWithChildren<ButtonGroup>;
    }
  }
}

declare const tagName = 's-button-group';
export interface ButtonGroupJSXProps
  extends Partial<ButtonGroupProps>,
    Pick<ButtonGroupProps$1, 'id' | 'children'> {
  /**
   * The buttons displayed within the button group component, which are arranged together as a cohesive set of related actions.
   */
  children?: ComponentChildren;
  /**
   * The main action for this group, displayed with high visual emphasis.
   * Accepts a single button with `variant="primary"`.
   *
   * Use this for the primary action you want users to take. This can't be used when `gap="none"`.
   */
  primaryAction?: ComponentChildren;
  /**
   * Supporting actions displayed with less emphasis than the primary action.
   * Accepts one or more button components with `variant="secondary"` or `variant="auto"`.
   *
   * Use these for alternative or less critical actions.
   */
  secondaryActions?: ComponentChildren;
}

export {ButtonGroup};
export type {ButtonGroupJSXProps};

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
  ChoiceListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 * @publicDocs
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`. Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 * @publicDocs
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
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
 * Configure the following properties on the choice list component.
 */
export interface ChoiceListProps
  extends Required<
    Pick<
      ChoiceListProps$1,
      | 'details'
      | 'disabled'
      | 'error'
      | 'label'
      | 'labelAccessibilityVisibility'
      | 'multiple'
      | 'name'
      | 'values'
    >
  > {
  /**
   * Whether the field is disabled, preventing any user interaction. When `true`, the `disabled` property on any child choices is ignored.
   *
   * @default false
   */
  disabled: Required<ChoiceListProps$1>['disabled'];
  /**
   * Whether multiple choices can be selected.
   *
   * @default false
   */
  multiple: Required<ChoiceListProps$1>['multiple'];
}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

declare const internals: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
/**
 * Configure the following properties on the choice list component.
 * @publicDocs
 */
declare class ChoiceList extends BaseClass implements ChoiceListProps {
  /**
   * Wraps change and input event listeners so they only fire when the event
   * was dispatched directly on this ChoiceList (event.eventPhase === Event.AT_TARGET).
   *
   * This prevents form events from elements inside secondary content (e.g.
   * TextField, native <input>) from being mistakenly treated as ChoiceList
   * value-change events, while still allowing those events to bubble normally
   * through the DOM (preserving React's event delegation).
   * @private
   */
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;
  /** @private */
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void;
  accessor disabled: ChoiceListProps['disabled'];
  /**
   * The name attribute for the field, used to identify the field's value when the form is submitted. Must be unique within the nearest containing form.
   */
  accessor name: ChoiceListProps['name'];
  /**
   * An error message displayed below the checkbox to indicate validation problems. When set, the checkbox is styled with error indicators and the message is announced to screen readers.
   */
  accessor error: ChoiceListProps['error'];
  /**
   * Supplementary text displayed below the checkbox to provide additional context, instructions, or help. Use this to explain what checking the box means or provide guidance to users. This text is announced to screen readers.
   */
  accessor details: ChoiceListProps['details'];
  accessor multiple: ChoiceListProps['multiple'];
  /**
   * The text displayed as the field label, which identifies the purpose of the field to users. This label is associated with the field for accessibility and helps users understand what information to provide.
   */
  accessor label: ChoiceListProps['label'];
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   *
   * - `visible`: The label is shown to everyone (default).
   * - `exclusive`: The label is visually hidden but still announced by screen readers.
   *
   * Use `exclusive` when the surrounding context makes the label redundant visually, but screen reader users still need it for clarity.
   */
  accessor labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
  get values(): ChoiceListProps['values'];
  /**
   * An array of `value` attributes for the currently selected options. When provided, this property automatically sets the `selected` state on child option components that have matching `value` attributes. Options with values included in this array will be marked as selected, while others will be unselected.
   */
  set values(values: ChoiceListProps['values']);
  /** @private */
  formResetCallback(): void;
  constructor();
  /** @private */
  connectedCallback(): void;
  /** @private */
  disconnectedCallback(): void;
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: ChoiceList;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: ChoiceListJSXProps &
        PreactBaseElementPropsWithChildren<ChoiceList>;
    }
  }
}

declare const tagName = 's-choice-list';
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id' | 'children'> {
  /**
   * The choices a user can select from.
   *
   * Accepts choice components.
   */
  children?: ComponentChildren;
  /**
   * A callback fired when the user has finished changing the value.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the value.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ChoiceList};
export type {ChoiceListJSXProps};

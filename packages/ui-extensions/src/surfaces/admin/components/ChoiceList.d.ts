/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  ComponentChildren,
  ChoiceListProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * An event object with a strongly-typed `currentTarget` property that references the specific HTML element that triggered the event.
 *
 * This type extends the standard DOM `Event` interface and ensures type safety when accessing the element that fired the event.
 */
export type CallbackEvent<T extends keyof HTMLElementTagNameMap> = Event & {
  currentTarget: HTMLElementTagNameMap[T];
};
/**
 * A function that handles events from UI components.
 *
 * This type represents an event listener callback that receives a `CallbackEvent` with a strongly-typed `currentTarget`.
 * Use this for component event handlers like `click`, `focus`, `blur`, and other DOM events.
 *
 * @example
 * const handleClick: CallbackEventListener<'button'> = (event) => {
 *   console.log('Button clicked:', event.currentTarget);
 * };
 */
export type CallbackEventListener<T extends keyof HTMLElementTagNameMap> =
  | (EventListener & {
      (event: CallbackEvent<T>): void;
    })
  | null;
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
 * Properties for rendering a list of choices that lets users select one or more options using radio buttons or checkboxes.
 * @publicDocs
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
  > {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
declare class BaseClass extends PolarisCustomElement {
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
}
/**
 * A list of choices that lets users select one or more options using radio buttons or checkboxes.
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

  /**
   * Whether all choices in the list are disabled and can't be selected.
   */
  accessor disabled: ChoiceListProps['disabled'];
  /**
   * The name that identifies this choice list when the form is submitted.
   */
  accessor name: ChoiceListProps['name'];
  /**
   * An error message that's displayed below the choice list when validation fails.
   */
  accessor error: ChoiceListProps['error'];
  /**
   * Additional text to provide context or guidance for the choice list.
   */
  accessor details: ChoiceListProps['details'];
  /**
   * Whether users can select more than one choice at a time.
   */
  accessor multiple: ChoiceListProps['multiple'];
  /**
   * The text that describes what the choice list is for.
   */
  accessor label: ChoiceListProps['label'];
  /**
   * A callback that's triggered when the selected choices change and the choice list loses focus.
   */
  accessor onchange: CallbackEventListener<typeof tagName> | null;
  /**
   * A callback that's triggered when the selected choices change.
   */
  accessor oninput: CallbackEventListener<typeof tagName> | null;
  /**
   * Controls whether the label is visible to all users or only to screen readers.
   */
  accessor labelAccessibilityVisibility: ChoiceListProps['labelAccessibilityVisibility'];
  /**
   * The values of the currently selected choices.
   */
  get values(): ChoiceListProps['values'];
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
/**
 * Properties for using the choice list component in JSX with React-style event handlers.
 * @publicDocs
 */
export interface ChoiceListJSXProps
  extends Partial<ChoiceListProps>,
    Pick<ChoiceListProps$1, 'id' | 'children'> {
  /**
   * The choices that a user can select from, provided as Choice components.
   *
   * Accepts Choice components.
   */
  children?: ComponentChildren;
  /**
   * A callback that's triggered when the selected choices change and the choice list loses focus.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the selected choices change as the user interacts with them.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {ChoiceList};
export type {ChoiceListJSXProps};

/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  DatePickerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the date picker component. These properties configure a standalone calendar interface for selecting single dates or date ranges, with support for date constraints, day-of-week restrictions, and month/year navigation.
 * @publicDocs
 */
export interface DatePickerProps
  extends Required<
    Pick<
      DatePickerProps$1,
      | 'defaultView'
      | 'view'
      | 'allow'
      | 'disallow'
      | 'allowDays'
      | 'disallowDays'
      | 'value'
      | 'defaultValue'
      | 'name'
    >
  > {
  /**
   * The type of date selection allowed.
   *
   * - `single`: Select a single date
   * - `range`: Select a date range
   *
   * @default "single"
   */
  type: Extract<DatePickerProps$1['type'], 'single' | 'range'>;
}

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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

declare const internals: unique symbol;
declare const dirtyStateSymbol: unique symbol;
declare abstract class DatePickerBase<
    TagName extends 's-date-picker' | 's-internal-date-picker',
  >
  extends PolarisCustomElement
  implements DatePickerProps
{
  static formAssociated: boolean;
  constructor(renderImpl: RenderImpl);
  /** @private */
  [internals]: ElementInternals;
  /**
   * The initial month and year shown when the calendar first renders, formatted as an ISO 8601 date string.
   */
  accessor defaultView: string;
  /**
   * The currently visible month and year in the calendar, formatted as an ISO 8601 date string.
   */
  set view(view: string);
  get view(): string;
  /**
   * The dates that are allowed to be selected, specified as ISO 8601 date strings or date ranges.
   */
  accessor allow: DatePickerProps['allow'];
  /**
   * The dates that aren't allowed to be selected, specified as ISO 8601 date strings or date ranges.
   */
  accessor disallow: DatePickerProps['disallow'];
  /**
   * The days of the week that are allowed to be selected. Available values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
   */
  accessor allowDays: DatePickerProps['allowDays'];
  /**
   * The days of the week that aren't allowed to be selected. Available values: `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`.
   */
  accessor disallowDays: DatePickerProps['disallowDays'];
  /**
   * The type of date selection allowed. Available values: `single`, `range`.
   */
  accessor type: DatePickerProps['type'];
  /**
   * The initial selected date or date range when the picker first renders, formatted as an ISO 8601 date string.
   */
  accessor defaultValue: DatePickerProps['defaultValue'];
  /**
   * The name of the picker, used when submitting form data.
   */
  accessor name: DatePickerProps['name'];
  /**
   * The currently selected date or date range, formatted as an ISO 8601 date string.
   */
  set value(value: string);
  get value(): string;
  /** @private */
  [dirtyStateSymbol]: boolean;
  /** @private */
  formResetCallback(): void;
  /**
   * The callback that's triggered when the visible month or year in the calendar changes.
   */
  accessor onviewchange: CallbackEventListener<TagName> | null;
  /**
   * The callback that's triggered when the picker receives focus.
   */
  accessor onfocus: CallbackEventListener<TagName> | null;
  /**
   * The callback that's triggered when the picker loses focus.
   */
  accessor onblur: CallbackEventListener<TagName> | null;
  /**
   * The callback that's triggered when the selected date changes as the user interacts with the picker.
   */
  accessor oninput: CallbackEventListener<TagName> | null;
  /**
   * The callback that's triggered when the selected date changes and the picker loses focus.
   */
  accessor onchange: CallbackEventListener<TagName> | null;
}

/**
 * The date picker custom element class that renders a standalone calendar interface in the Shopify admin. This component allows merchants to select single dates or date ranges using an interactive calendar with month/year navigation, date constraints, and day-of-week restrictions.
 */
declare class DatePicker
  extends DatePickerBase<typeof tagName>
  implements DatePickerProps
{
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: DatePicker;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: DatePickerJSXProps & PreactBaseElementProps<DatePicker>;
    }
  }
}

declare const tagName = 's-date-picker';
/**
 * The JSX props for the date picker component. These properties extend `DatePickerProps` with JSX-specific event callbacks for React-style event handling when used in Preact, including callbacks for date selection, focus events, and view changes.
 * @publicDocs
 */
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  /**
   * A callback that's triggered when the visible month or year in the calendar changes.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the picker receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the picker loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the selected date changes as the user interacts with the picker.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback that's triggered when the selected date changes and the picker loses focus.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DatePicker};
export type {DatePickerJSXProps};

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
  DatePickerProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';
import * as preact$1 from 'preact';
import {ReactNode, RefAttributes} from 'react';

/**
 * Configure the following properties on the date picker component.
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
  /**
   * The currently selected date(s). An empty string means no date is selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  value: Required<DatePickerProps$1>['value'];
  /**
   * The initially selected date(s) when the component first renders. An empty string means no date is initially selected.
   *
   * - Single date in `YYYY-MM-DD` format when `type` is set to `"single"`
   * - Date range in `YYYY-MM-DD--YYYY-MM-DD` format (inclusive) when `type` is set to `"range"`
   *
   * @default ""
   */
  defaultValue: Required<DatePickerProps$1>['defaultValue'];
  /**
   * Specifies which dates can be selected as a comma-separated list. An empty string (default) allows all dates.
   *
   * **Formats:**
   * - `YYYY-MM-DD`: Single date
   * - `YYYY-MM`: Whole month
   * - `YYYY`: Whole year
   * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
   *
   * **Examples:**
   * - `2024-02--2025`: February 2024 through end of 2025
   * - `2024-05-09, 2024-05-11`: Only May 9th and 11th, 2024
   *
   * @default ""
   */
  allow: Required<DatePickerProps$1>['allow'];
  /**
   * Specifies which days of the week can be selected as a comma-separated list. Further restricts dates from `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (only weekends)
   *
   * @default ""
   */
  allowDays: Required<DatePickerProps$1>['allowDays'];
  /**
   * Specifies which dates can't be selected as a comma-separated list. These dates are excluded from those specified in `allow`. An empty string (default) has no effect.
   *
   * **Formats:**
   * - `YYYY-MM-DD`: Single date
   * - `YYYY-MM`: Whole month
   * - `YYYY`: Whole year
   * - `start--end`: Date range (inclusive, unbounded if start/end omitted)
   *
   * **Examples:**
   * - `--2024-02`: All dates before February 2024
   * - `2024-05-09, 2024-05-11`: May 9th and 11th, 2024
   *
   * @default ""
   */
  disallow: Required<DatePickerProps$1>['disallow'];
  /**
   * Specifies which days of the week can't be selected as a comma-separated list. Excludes days from `allowDays` and intersects with `allow` and `disallow`. An empty string (default) has no effect.
   *
   * **Valid days**: `sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`
   *
   * **Example:** `saturday, sunday` (no weekends)
   *
   * @default ""
   */
  disallowDays: Required<DatePickerProps$1>['disallowDays'];
  /**
   * The currently displayed month in `YYYY-MM` format. When changed, the `viewchange` callback is triggered. Defaults to `defaultView`.
   */
  view: Required<DatePickerProps$1>['view'];
  /**
   * The default month to display in `YYYY-MM` format. Used until the `view` callback is set by user interaction or programmatically. Defaults to the current month in the user's locale.
   */
  defaultView: Required<DatePickerProps$1>['defaultView'];
  /**
   * Controls how many months are displayed.
   *
   * - `'auto'`: Context-driven. Today this renders a single month, matching `'1'`.
   * - `'1'`: Renders one month at a time.
   * - `'2'`: Renders two consecutive months side-by-side.
   *
   * @default 'auto'
   */
  visibleMonths: 'auto' | '1' | '2';
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

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
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
  accessor defaultView: string;
  set view(view: string);
  get view(): string;
  accessor allow: DatePickerProps['allow'];
  accessor disallow: DatePickerProps['disallow'];
  accessor allowDays: DatePickerProps['allowDays'];
  accessor disallowDays: DatePickerProps['disallowDays'];
  accessor type: DatePickerProps['type'];
  accessor defaultValue: DatePickerProps['defaultValue'];
  accessor name: DatePickerProps['name'];
  accessor visibleMonths: DatePickerProps['visibleMonths'];
  set value(value: string);
  get value(): string;
  /** @private */
  [dirtyStateSymbol]: boolean;
  /** @private */
  formResetCallback(): void;
  accessor onviewchange: CallbackEventListener<TagName> | null;
  accessor onfocus: CallbackEventListener<TagName> | null;
  accessor onblur: CallbackEventListener<TagName> | null;
  accessor oninput: CallbackEventListener<TagName> | null;
  accessor onchange: CallbackEventListener<TagName> | null;
}

/**
 * Configure the following properties on the date picker component.
 * @publicDocs
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
export interface DatePickerJSXProps
  extends Partial<DatePickerProps>,
    Pick<DatePickerProps$1, 'id'> {
  /**
   * A callback fired when the calendar view changes, such as when navigating between months.
   */
  onViewChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the date picker receives focus.
   */
  onFocus?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the date picker loses focus.
   */
  onBlur?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the user makes any changes to the selected date.
   */
  onInput?: ((event: CallbackEvent<typeof tagName>) => void) | null;
  /**
   * A callback fired when the user has finished selecting a date and the value changes.
   */
  onChange?: ((event: CallbackEvent<typeof tagName>) => void) | null;
}

export {DatePicker};
export type {DatePickerJSXProps};

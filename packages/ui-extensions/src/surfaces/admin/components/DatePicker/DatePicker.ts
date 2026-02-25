import {createRemoteComponent} from '@remote-ui/core';

/**
 * Props for the DatePicker component, a calendar-based date selection control.
 * The generic parameter `T` determines the selection mode: pass a `DateString`
 * for single-date, a `DateString[]` for multi-date, or a `Range` for range selection.
 */
export interface DatePickerProps<T extends Selected> {
  /**
   * The year and month currently displayed in the calendar. Use this prop
   * together with `onYearMonthChange` to control which month the user sees.
   * When set, the calendar won't navigate on its own. You must update this
   * value in response to `onYearMonthChange` to let the user browse months.
   *
   * Accepts either an object (`{ year, month }`) or a `YYYY-MM` string.
   */
  yearMonth?: {year: Year; month: Month} | YearMonthString;

  /**
   * The year and month to display when the calendar first renders. Use this
   * for an uncontrolled calendar that manages its own navigation state.
   * This prop is ignored when `yearMonth` is set (controlled mode).
   *
   * Accepts either an object (`{ year, month }`) or a `YYYY-MM` string.
   */
  defaultYearMonth?: {year: Year; month: Month} | YearMonthString;

  /**
   * The dates that the user can't select.
   *
   * - `DateString`: Disables a specific date, such as `'2024-12-25'`.
   * - `Range`: Disables a span of dates between `start` and `end`.
   *   Omit `start` or `end` for an open-ended range.
   * - `Day`: Disables every occurrence of a weekday, such as `'Sunday'`.
   * - `Disabled[]`: An array combining any of the above.
   * - `true`: Disables the entire date picker.
   */
  disabled?: Disabled | Disabled[] | boolean;

  /**
   * Whether the date picker is read-only. When `true`, the user can view
   * the calendar and any selected dates, but can't change the selection.
   */
  readOnly?: boolean;

  /**
   * The currently selected date or dates. Pass a date string for
   * single-date selection, an array of date strings for multi-date
   * selection, or a `Range` object for range selection. Update this
   * value in your `onChange` handler to reflect the user's choice.
   */
  selected?: T;

  /**
   * A callback that fires when the user selects or deselects a date. Receives
   * the new selection value matching the shape of `selected` (a string, an
   * array of strings, or a `Range` object). You must store this value in
   * state and pass it back through the `selected` prop.
   */
  onChange?(selected: T): void;

  /**
   * A callback that fires when the user navigates to a different month or
   * year (for example, by pressing the forward/back arrows). Receives an
   * object with `year` and `month` properties. When using controlled
   * navigation (`yearMonth` is set), you must update your state and pass
   * the new value back through the `yearMonth` prop.
   */
  onYearMonthChange?(yearMonth: {year: Year; month: Month}): void;
}

/**
 * A date string in simplified ISO 8601 format (`YYYY-MM-DD`), for example `'2024-12-25'`.
 */
export type DateString = string;

/**
 * A year-and-month string in simplified ISO 8601 format (`YYYY-MM`), for example `'2024-12'`.
 */
export type YearMonthString = string;

/**
 * A month number in the 1–12 range (1 = January, 12 = December).
 */
export type Month = number;

/**
 * A four-digit year number, for example `2024`.
 */
export type Year = number;

/**
 * A day of the week. Used in `disabled` to disable every occurrence of
 * a specific weekday (for example, `'Sunday'` disables all Sundays).
 */
export type Day =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';

/**
 * The value type for date picker selections. Pass a single `DateString` for
 * single-date mode, an array of `DateString` values for multi-date mode,
 * or a `Range` object for range mode.
 */
export type Selected = DateString | DateString[] | Range;

/**
 * A value that can be disabled in the date picker. Can be a specific
 * `DateString`, a `Range` of dates, or a `Day` of the week.
 */
export type Disabled = DateString | Range | Day;

/**
 * A date range with optional start and end boundaries. Used for range
 * selection in the date picker or for disabling a span of dates.
 * Omitting `start` or `end` creates an open-ended range.
 */
export interface Range {
  /**
   * The first day (inclusive) of the selected range.
   */
  start?: DateString;

  /**
   * The last day (inclusive) of the selected range.
   */
  end?: DateString;
}

/**
 * A calendar-based date picker that supports single-date, multi-date, and
 * date-range selection modes.
 */
export const DatePicker = createRemoteComponent<
  'DatePicker',
  DatePickerProps<Selected>
>('DatePicker');

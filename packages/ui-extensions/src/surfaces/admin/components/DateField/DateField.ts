import {createRemoteComponent} from '@remote-ui/core';
import type {DatePickerProps} from '../DatePicker/DatePicker';
import type {TextFieldProps} from '../TextField/TextField';

/**
 * Props for the DateField component, which combines a text input with a calendar
 * picker for date selection. Text input props (like `label`, `value`, `onChange`,
 * and `error`) come from `TextFieldProps`, while calendar navigation props (like
 * `yearMonth`, `disabled`, and `onYearMonthChange`) come from `DatePickerProps`.
 */
export interface DateFieldProps
  extends Pick<
      TextFieldProps,
      | 'label'
      | 'name'
      | 'id'
      | 'readOnly'
      | 'onFocus'
      | 'onInput'
      | 'onBlur'
      | 'onChange'
      | 'error'
      | 'value'
    >,
    Pick<
      DatePickerProps<string>,
      'yearMonth' | 'defaultYearMonth' | 'disabled' | 'onYearMonthChange'
    > {}

/**
 * DateField combines a text input with a calendar picker for date selection.
 * Merchants can type a date directly or use the calendar to pick one.
 */
export const DateField = createRemoteComponent<'DateField', DateFieldProps>(
  'DateField',
);

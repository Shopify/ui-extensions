import {createRemoteComponent} from '@remote-ui/core';
import type {DatePickerProps, Selected} from '../DatePicker/DatePicker';
import {InputProps} from '../shared';

export interface DateFieldProps<T extends Selected = Selected>
  extends Pick<
      InputProps<T>,
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
      DatePickerProps<T>,
      'yearMonth' | 'defaultYearMonth' | 'disabled' | 'onYearMonthChange'
    > {}

export const DateField = createRemoteComponent<
  'DateField',
  DateFieldProps<Selected>
>('DateField');

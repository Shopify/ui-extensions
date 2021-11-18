import {createRemoteComponent} from '@remote-ui/core';

export interface DateTimePickerProps {
  /** Option to display calendar for Date or clock for time */
  type: 'date' | 'time';
}

/**
 * DateTimePicker is text fields with a popover calender or clock that allow users to select dates and/or times
 */
export const DateTimePicker = createRemoteComponent<
  'DateTimePicker',
  DateTimePickerProps
>('DateTimePicker');

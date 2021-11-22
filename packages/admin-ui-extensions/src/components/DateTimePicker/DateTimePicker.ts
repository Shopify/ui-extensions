import {createRemoteComponent} from '@remote-ui/core';

export interface DateTimePickerProps {
  label: string;
  value: string;
  onChange(newValue: string): void;
  error?: string;
  disableDatesBefore?: string;
  disableDatesAfter?: string;
  disabled?: boolean;
}

/**
 * DateTimePicker is a set of text fields with popover a calender and a time selector that allow users to select dates and times.
 */
export const DateTimePicker = createRemoteComponent<
  'DateTimePicker',
  DateTimePickerProps
>('DateTimePicker');

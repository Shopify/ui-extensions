import {createRemoteComponent} from '@remote-ui/core';

export interface DatePickerProps {
  /** ID for the Element. */
  id: string;

  /** The month to show, from 0 to 11. 0 is January, 1 is February ... 11 is December. */
  month?: number;

  /** The year to show. */
  year?: number;

  /** Callback when a date is selected. */
  onChange?(value: Date): void | Promise<void>;
}

/**
 * DatePickers let merchants choose dates from a visual calendar that’s consistently applied wherever dates need to be selected across Shopify.
 */
export const DatePicker = createRemoteComponent<'DatePicker', DatePickerProps>(
  'DatePicker',
);

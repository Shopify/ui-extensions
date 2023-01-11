import {createRemoteComponent} from '@remote-ui/core';

export interface TimePickerProps {
  /** ID for the Element. */
  id: string;

  /** Text to display when no time is selected */
  placeholder?: string;

  /** Callback when a time is selected. */
  onChange?(value: string): void | Promise<void>;
}

/**
 * TimePickers let merchants choose dates from a visual calendar that’s consistently applied wherever dates need to be selected across Shopify.
 */
export const TimePicker = createRemoteComponent<'TimePicker', TimePickerProps>(
  'TimePicker',
);

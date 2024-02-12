import {createRemoteComponent} from '@remote-ui/core';
import type {IconSource} from '../shared-checkout-components';

export interface TimelineEventProps {
  /**
   * Specifies which icon to display.
   * Check the list of available icons [here](/docs/api/checkout-ui-extensions/components/media/icon#icons).
   */
  statusIcon: IconSource;
  /**
   * Sets the title of the TimelineEvent.
   */
  title: string;
  /**
   * Sets the description of the TimelineEvent.
   * It's only visible when the event is the first one.
   */
  description: string;
  /**
   * Sets the date of the TimelineEvent.
   * Format must be YYYY-MM-DD.
   * The timeline will be ordered by this date.
   */
  eventTime: string;
}

export const TimelineEvent = createRemoteComponent<
  'TimelineEvent',
  TimelineEventProps
>('TimelineEvent');

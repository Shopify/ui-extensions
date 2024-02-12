import {TimelineEvent as BaseTimelineEvent} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TimelineEventProps = ReactPropsFromRemoteComponentType<
  typeof BaseTimelineEvent
>;

export const TimelineEvent = createRemoteReactComponent(BaseTimelineEvent);

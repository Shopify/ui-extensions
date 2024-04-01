import type {TrackingEvents} from '@shopify/consent-tracking-api';

import type {
  PublisherOptions,
  SubscriberCallback,
  SubscriberOptions,
} from './EventBus';

export type ConsentTrackingEventName = `${TrackingEvents}`;

export type ConsentEvents = {
  [K in ConsentTrackingEventName]: CustomerPrivacyPayload;
};

export interface CustomerPrivacyPayload {
  customerPrivacy?: {
    analyticsProcessingAllowed?: boolean;
    marketingAllowed?: boolean;
    preferencesProcessingAllowed?: boolean;
    saleOfDataAllowed?: boolean;
  };
}

export interface CustomerPrivacyEventBus {
  publish<K extends keyof ConsentEvents>(
    name: K,
    payload: CustomerPrivacyPayload,
    options?: PublisherOptions,
  ): boolean;
  subscribe<K extends keyof ConsentEvents>(
    name: K,
    callback: SubscriberCallback<CustomerPrivacyPayload>,
    options?: SubscriberOptions,
  ): () => boolean;
}

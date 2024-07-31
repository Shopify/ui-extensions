import type {
  PublisherOptions,
  SubscriberCallback,
  SubscriberOptions,
} from './EventBus';

// For App pixel extensions, we export these types for developers. Since `TrackingEvents` is defined within
// the `@shopify/consent-tracking-api` package, we now need to include it as a dependency in our WPM package.
// However, the NPM package for `@shopify/consent-tracking-api` is currently a private repo until they introduce
// versioning. So until they do that, we will manually define the TrackingEvents type here. We also disable the
// linting rules here because the Consent Tracking API names it in this way. When we transition back to the NPM package
// we do not want to show an external change in naming.

export const TrackingEvents = {
  ANALYTICS_DECLINED: 'analyticsConsentDeclined',
  ANALYTICS_ACCEPTED: 'analyticsConsentAccepted',
  CONSENT_COLLECTED: 'visitorConsentCollected',
} as const;
export type TrackingEventsType =
  (typeof TrackingEvents)[keyof typeof TrackingEvents];

export type ConsentTrackingEventName = `${TrackingEventsType}`;
export type ConsentEvents = {
  [K in ConsentTrackingEventName]: CustomerPrivacyPayload;
};

export interface CustomerPrivacyPayload {
  customerPrivacy: {
    analyticsProcessingAllowed: boolean;
    marketingAllowed: boolean;
    preferencesProcessingAllowed: boolean;
    saleOfDataAllowed: boolean;
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

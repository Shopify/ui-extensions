import type {
  PublisherCustomData,
  PublisherData,
  PublisherOptions,
  SubscriberCallback,
  SubscriberOptions,
} from './EventBus';
import type {PixelEvents, CustomEvent, EventType} from './PixelEvents';

export type SchemaVersion = 'v1';

export type PixelEventName = keyof PixelEvents;

export type EventNameOfType<T extends EventType> = {
  [K in PixelEventName]: PixelEvents[K] extends {type: T} ? K : never;
}[PixelEventName];

export type StandardEventName = EventNameOfType<EventType.Standard>;
export type StandardEvent = PixelEvents[StandardEventName];

export type AdvancedDomEventName = EventNameOfType<EventType.AdvancedDom>;
export type AdvancedDomEvent = PixelEvents[AdvancedDomEventName];

export type DomEventName = EventNameOfType<EventType.Dom>;
export type DomEvent = PixelEvents[DomEventName];

export interface StandardEvents extends PixelEvents {
  all_events: StandardEvent | CustomEvent | DomEvent;
  all_standard_events: StandardEvent;
  all_custom_events: CustomEvent;
  all_dom_events: DomEvent;
}

export type DomEvents = {
  [key in DomEventName]: PixelEvents[key];
};

export type AdvancedDomEvents = {
  [key in AdvancedDomEventName]: PixelEvents[key];
};

export interface CustomEvents {
  [key: string]: CustomEvent;
}

export type Events = StandardEvents & CustomEvents;

export interface WebPixelsManager {
  publish<K extends StandardEventName>(
    name: K,
    payload: PublisherData<PixelEvents[K]>,
    options?: PublisherOptions,
  ): boolean;
  publishCustomEvent(
    name: string,
    payload?: PublisherCustomData<CustomEvent>,
    options?: PublisherOptions,
  ): boolean;
  publishDomEvent<K extends DomEventName>(
    name: K,
    payload: PublisherData<PixelEvents[K]>,
    options?: PublisherOptions,
  ): boolean;
  subscribe<K extends string>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: SubscriberOptions,
  ): () => boolean;
}

import type {PixelEvents, CustomEvent, EventType} from './PixelEvents';

export type SchemaVersion = 'v1';

export type PixelEventName = keyof PixelEvents;

type EventNameOfType<T extends EventType> = {
  [K in PixelEventName]: PixelEvents[K] extends {type: T} ? K : never;
}[PixelEventName];

export type StandardEventName = EventNameOfType<EventType.Standard>;
export type StandardEvent = PixelEvents[StandardEventName];

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

export interface CustomEvents {
  [key: string]: CustomEvent;
}

export type Events = StandardEvents & CustomEvents;

export type KeyOfEvent<T> = Extract<keyof T, string>;

export type PublisherData<P> = P extends {data: infer T} ? T : never;
export type PublisherCustomData<P> = P extends {customData: infer T}
  ? T
  : never;
export interface PublisherOptions extends Record<string, unknown> {
  extension?: {
    extensionId: string;
    appId: string;
    type: string;
  };
  eventId?: string;
}

export type SubscriberCallback<T> = (event: T) => void;
export type SubscriberOptions = Record<string, unknown>;

export interface EventBus {
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
  subscribe<K extends KeyOfEvent<Events>>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: SubscriberOptions,
  ): () => boolean;
}

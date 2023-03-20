import type {
  PixelEvents,
  PixelEventsCustomEvent as PixelEventsCustomEventOrig,
} from './PixelEvents';

export type SchemaVersion = 'v1';

export interface StandardEvents extends PixelEvents {
  all_events: PixelEvents[keyof PixelEvents];
  all_standard_events: PixelEvents[keyof PixelEvents];
  all_custom_events: PixelEvents[keyof PixelEvents];
}

interface PixelEventsCustomEvent
  extends Omit<PixelEventsCustomEventOrig, 'name'> {
  name: string;
}

export interface CustomEvents {
  [key: string]: PixelEventsCustomEvent;
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
}

export type SubscriberCallback<T> = (event: T) => void;
export type SubscriberOptions = Record<string, unknown>;

export interface EventBus {
  publish<K extends KeyOfEvent<StandardEvents>>(
    name: K,
    payload?: PublisherData<Events[K]>,
    options?: PublisherOptions,
  ): boolean;
  publishCustomEvent(
    name: string,
    payload?: PublisherCustomData<Events['custom_event']>,
    options?: PublisherOptions,
  ): boolean;
  subscribe<K extends KeyOfEvent<Events>>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: SubscriberOptions,
  ): () => boolean;
}

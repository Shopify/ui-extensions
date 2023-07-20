import type {PixelEvents, CustomEvent} from './PixelEvents';

export type SchemaVersion = 'v1';

export interface StandardEvents extends PixelEvents {
  all_events: PixelEvents[keyof PixelEvents] | CustomEvent;
  all_standard_events: PixelEvents[keyof PixelEvents];
  all_custom_events: CustomEvent;
}

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
}

export type SubscriberCallback<T> = (event: T) => void;
export type SubscriberOptions = Record<string, unknown>;

export interface EventBus {
  publish<K extends KeyOfEvent<PixelEvents>>(
    name: K,
    payload: PublisherData<PixelEvents[K]>,
    options?: PublisherOptions,
  ): boolean;
  publishCustomEvent(
    name: string,
    payload?: PublisherCustomData<CustomEvent>,
    options?: PublisherOptions,
  ): boolean;
  subscribe<K extends KeyOfEvent<Events>>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: SubscriberOptions,
  ): () => boolean;
}

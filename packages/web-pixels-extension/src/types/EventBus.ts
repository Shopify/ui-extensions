import type {Event} from './Event';

export type SchemaVersion = 'v1';

export interface Events extends Event {
  all_events: Event[keyof Event];
  all_standard_events: Event[keyof Event];
  all_custom_events: Event[keyof Event];
}

export type KeyOfEvent<T> = Extract<keyof T, string>;

export type PublisherData<P> = P extends {data: infer T} ? T : never;
export type PublisherCustomData<P> = P extends {customData: infer T}
  ? T
  : never;
export type PublisherOptions = Record<string, unknown>;

export type SubscriberCallback<T> = (event: T) => void;
export type SubscriberOptions = Record<string, unknown>;

export interface EventBus {
  publish<K extends KeyOfEvent<Events>>(
    name: K,
    payload?: PublisherData<Events[K]>,
    options?: PublisherOptions,
  ): boolean;
  publishCustomEvent(
    name: 'custom_event',
    payload?: PublisherCustomData<Events['custom_event']>,
    options?: PublisherOptions,
  ): boolean;
  subscribe<K extends KeyOfEvent<Events>>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: SubscriberOptions,
  ): () => boolean;
}

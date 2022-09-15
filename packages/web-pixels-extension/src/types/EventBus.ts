import type {Event} from './Event';

export type PublisherData<P> = P extends {data: infer T}
  ? Omit<T, 'customer'>
  : never;
export type PublisherCustomData<P> = P extends {customData: infer T}
  ? T
  : never;
export type SubscriberCallback<T> = (event: T) => void;
export type KeyOfEvent<T> = Extract<keyof T, string>;

export interface Events extends Event {
  all_events: Event[keyof Event];
  all_standard_events: Event[keyof Event];
  all_custom_events: Event[keyof Event];
}

export type SchemaVersion = 'v1';

export interface EventBus {
  publish<K extends KeyOfEvent<Events>>(
    name: K,
    payload?: PublisherData<Events[K]>,
  ): boolean;
  publishCustomEvent(
    name: 'custom_event',
    payload?: PublisherCustomData<Events['custom_event']>,
  ): boolean;
  subscribe<K extends KeyOfEvent<Events>>(
    name: K,
    callback: SubscriberCallback<Events[K]>,
    options?: Record<string, any>,
  ): () => boolean;
}

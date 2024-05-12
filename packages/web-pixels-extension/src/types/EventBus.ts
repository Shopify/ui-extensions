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
export type SubscriberOptions = Record<string, any>;

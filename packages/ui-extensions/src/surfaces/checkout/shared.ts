// import type {ComponentsBuilder, AnyComponentBuilder} from '../../shared';

// import type * as ComponentsModule from './components';
// export type MaybePromise<T> = T extends Promise<any> ? T : T | Promise<T>;

// export type Components = ComponentsBuilder<typeof ComponentsModule>;
// export type AnyComponent = AnyComponentBuilder<typeof ComponentsModule>;

// export type AllowedComponents<Allowed extends keyof typeof ComponentsModule> =
//   AnyComponentBuilder<Pick<typeof ComponentsModule, Allowed>>;
// export type AnyComponentExcept<Except extends keyof typeof ComponentsModule> =
//   AnyComponentBuilder<Omit<typeof ComponentsModule, Except>>;

export type MaybePromise<T> = T extends Promise<any> ? T : T | Promise<T>;

export interface StatefulRemoteSubscribable<T> extends SyncSubscribable<T> {
  destroy(): Promise<void>;
}

export type Subscriber<T> = (value: T) => void;

export type RemoteSubscribeResult<T> = [() => void, T];

export interface SyncSubscribable<T> {
  readonly current: T;
  subscribe(subscriber: Subscriber<T>): () => void;
}

export interface RemoteSubscribable<T> {
  readonly initial: T;
  subscribe(subscriber: Subscriber<T>): MaybePromise<RemoteSubscribeResult<T>>;
}

export interface StatefulRemoteSubscribable<T> extends SyncSubscribable<T> {
  destroy(): Promise<void>;
}

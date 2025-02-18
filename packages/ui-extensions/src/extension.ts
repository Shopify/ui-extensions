import {RemoteConnection, RemoteRootElement} from '@remote-dom/core/elements';
import type {RemoteChannel, RemoteComponentType} from '@remote-ui/core';

export interface RenderExtensionConnection<
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  readonly channel: RemoteChannel | RemoteConnection;
  readonly components: AllowedComponents;
}

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  (
    connection: RenderExtensionConnection<AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

export interface RenderExtensionWithRemoteRoot<Api> {
  (root: RemoteRootElement, api: Api):
    | void
    | Promise<void>
    | Promise<() => void>;
}

export interface RunnableExtension<Api, Output> {
  (api: Api): Output | Promise<Output>;
}

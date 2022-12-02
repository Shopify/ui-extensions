import type {
  RemoteRoot,
  RemoteChannel,
  RemoteComponentType,
} from '@remote-ui/core';

export interface Extension<Api, Result> {
  (api: Api): Result;
}

export interface RenderExtensionConnection<
  AllowedComponents extends RemoteComponentType<
    string,
    any
  > = RemoteComponentType<any, any>,
> {
  channel: RemoteChannel;
  components: AllowedComponents[];
}

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any
  > = RemoteComponentType<any, any>,
> {
  (
    connection: RenderExtensionConnection<AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

export interface RenderExtensionWithRemoteRoot<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any
  > = RemoteComponentType<any, any>,
> {
  (
    root: RemoteRoot<AllowedComponents, AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

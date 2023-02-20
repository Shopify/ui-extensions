import type {
  RemoteRoot,
  RemoteChannel,
  RemoteComponentType,
} from '@remote-ui/core';
import { ApiForRenderExtension } from './surfaces/admin';

export interface Extension<Api, Result> {
  (api: Api): Result;
}

export interface RenderExtensionConnection<
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  readonly channel: RemoteChannel;
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

export interface RenderExtensionWithRemoteRoot<
  Api,
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  (
    root: RemoteRoot<AllowedComponents, AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

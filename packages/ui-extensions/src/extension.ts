import type {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

export interface Extension<Api, Result> {
  (api: Api): Result;
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
    root: RemoteRoot<AllowedComponents, AllowedComponents>,
    api: Api,
  ): void | Promise<void>;
}

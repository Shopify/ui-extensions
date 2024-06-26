import type {RemoteChannel, RemoteComponentType} from '@remote-ui/core';

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

export interface RenderExtension<Api, _AllowedComponents = any> {
  (connection: RenderExtensionConnection<any>, api: Api): void | Promise<void>;
}

export interface RenderExtensionWithElement<Api> {
  (root: HTMLElement, api: Api): void | Promise<void>;
}

export interface RunnableExtension<Api, Output> {
  (api: Api): Output | Promise<Output>;
}

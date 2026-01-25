import type {
  RemoteRoot,
  RemoteChannel,
  RemoteComponentType,
} from '@remote-ui/core';

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

/**
 * Defines a render extension that displays UI in the Shopify admin. Your extension receives a connection object with UI components and an API object with extension capabilities. Use this to build extensions that render visual interfaces in various admin contexts.
 */
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
  (root: RemoteRoot<AllowedComponents, AllowedComponents>, api: Api):
    | void
    | Promise<void>
    | Promise<() => void>;
}

/**
 * Defines a runnable extension that executes logic and returns data without rendering UI. Your extension receives an API object with extension capabilities and returns a result. Use this for extensions that perform data operations, validation checks, or conditional logic like should-render targets.
 */
export interface RunnableExtension<Api, Output> {
  (api: Api): Output | Promise<Output>;
}

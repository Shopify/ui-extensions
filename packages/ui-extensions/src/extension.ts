import type {
  RemoteRoot,
  RemoteChannel,
  RemoteComponentType,
} from '@remote-ui/core';

/**
 * The connection object provided to render extensions. Contains the remote channel for communication and the set of available UI components. This is the first parameter passed to your render extension function.
 */
export interface RenderExtensionConnection<
  AllowedComponents extends RemoteComponentType<
    string,
    any,
    any
  > = RemoteComponentType<any, any, any>,
> {
  /** The remote channel used for communication between the extension and the host environment. */
  readonly channel: RemoteChannel;
  /** The set of UI components available for rendering your extension's interface. */
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

/**
 * An alternative render extension signature that receives a `RemoteRoot` instead of a connection object. Use this when you need direct access to the `remote-ui` root for advanced rendering scenarios. The function can optionally return a cleanup function.
 */
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

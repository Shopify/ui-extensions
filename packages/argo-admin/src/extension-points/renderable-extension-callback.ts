import {RemoteRoot} from '@remote-ui/core';

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

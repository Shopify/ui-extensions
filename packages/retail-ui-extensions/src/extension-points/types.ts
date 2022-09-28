import {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

import type {LocaleApi} from '../extension-api/locale-api';
import type {NavigationApi} from '../extension-api/navigation-api';
import type {SessionTokenApi} from '../extension-api/session-token-api';

export type ExtensionResult = Record<string, never> | void;

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<string, any, any>
> {
  (root: RemoteRoot<AllowedComponents, true>, api: Api): ExtensionResult;
}

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & NavigationApi &
  LocaleApi &
  SessionTokenApi;

import {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

import type {LayoutApi} from '../extension-api/layout';
import type {LocaleApi} from '../extension-api/locale';
import type {ToastApi} from '../extension-api/toast';
import type {SessionTokenApi} from '../extension-api/sessionToken';

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
} & LayoutApi &
  LocaleApi &
  SessionTokenApi;

export type {LayoutApi, LocaleApi, SessionTokenApi, ToastApi};

export interface ContainerAction {
  content: string;
  onAction(): void;
}

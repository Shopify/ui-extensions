import {RemoteRoot, RemoteComponentType} from '@remote-ui/core';

import type {LocaleApi} from '../extension-api/LocaleApi';
import type {SessionTokenApi} from '../extension-api/SessionTokenApi';
import type {CartApi} from '../extension-api/CartApi';
import {NavigationApi} from '../extension-api';

export type ExtensionResult = Record<string, never> | void;

export interface RenderExtension<
  Api,
  AllowedComponents extends RemoteComponentType<string, any, any>
> {
  (root: RemoteRoot<AllowedComponents, true>, api: Api): ExtensionResult;
}

export type StandardApi<T> = {[key: string]: any} & {
  extensionPoint: T;
} & LocaleApi &
  CartApi &
  NavigationApi &
  SessionTokenApi;

export type {LocaleApi, SessionTokenApi, CartApi};

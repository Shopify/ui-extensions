import {RemoteRoot} from '@remote-ui/core';

import type {LayoutApi} from '../extension-api/layout';
import type {LocaleApi} from '../extension-api/locale';
import type {ToastApi} from '../extension-api/toast';
import type {SessionTokenApi} from '../extension-api/sessionToken';

export type ExtensionResult = {} | void;

export type RenderableExtensionCallback<Api, Root extends RemoteRoot> = (
  root: Root,
  api: Api,
) => ExtensionResult;

export type StandardApi<T> = {[key: string]: undefined} & {extensionPoint: T} & LayoutApi &
  LocaleApi &
  SessionTokenApi;

export {LayoutApi, LocaleApi, SessionTokenApi, ToastApi};

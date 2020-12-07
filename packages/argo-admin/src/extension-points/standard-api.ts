import {LayoutApi, LocaleApi, SessionTokenApi} from '../extension-api';

import {ExtensionPoint} from './extension-point';

export type StandardApi<T extends ExtensionPoint> = {extensionPoint: T} & LayoutApi &
  LocaleApi &
  SessionTokenApi;

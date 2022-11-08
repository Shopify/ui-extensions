import {RemoteRoot} from '@remote-ui/core';

import {CardSchema} from '../../containers';
import {
  ContainerAction,
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
} from '../types';

export type IcbExtensionExtensionPoint = 'Admin::Fulfillment::IcbExtension::Timeline';

export interface IcbExtensionContainerApi {
  close(): void;
  done(): void;
}

export interface IcbExtensionModalContainerApi {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type IcbExtensionStandardApi<
  T extends IcbExtensionExtensionPoint
> = StandardApi<T> & ToastApi;

export type IcbExtensionTimelineApi = IcbExtensionStandardApi<
  'Admin::Fulfillment::IcbExtension::Timeline'
>;

export interface IcbExtensionExtensionApi {
  'Admin::Fulfillment::IcbExtension::Timeline': IcbExtensionTimelineApi;
}

export interface IcbExtensionExtensionPointCallback {
  'Admin::Fulfillment::IcbExtension::Timeline': RenderableExtensionCallback<
    IcbExtensionExtensionApi['Admin::Fulfillment::IcbExtension::Timeline'],
    RemoteRoot<CardSchema>
  >;
}

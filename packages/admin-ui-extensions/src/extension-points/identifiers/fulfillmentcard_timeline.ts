import {RemoteRoot} from '@remote-ui/core';

import {CardSchema} from '../../containers';
import {
  ContainerAction,
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
} from '../types';

export type FulfillmentCardTimelineExtensionPoint = 'Admin::FulfillmentCard::Timeline';

export interface FulfillmentCardTimelineContainerApi {
  close(): void;
  done(): void;
}

export interface FulfillmentCardTimelineModalContainerApi {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type FulfillmentCardTimelineStandardApi<
  T extends FulfillmentCardTimelineExtensionPoint
> = StandardApi<T> & ToastApi;

export type FulfillmentCardTimelineApi = FulfillmentCardTimelineStandardApi<
  'Admin::FulfillmentCard::Timeline'
>;

export interface FulfillmentCardTimelineExtensionApi {
  'Admin::FulfillmentCard::Timeline': FulfillmentCardTimelineApi;
}

export interface FulfillmentCardTimelineExtensionPointCallback {
  'Admin::FulfillmentCard::Timeline': RenderableExtensionCallback<
    FulfillmentCardTimelineExtensionApi['Admin::FulfillmentCard::Timeline'],
    RemoteRoot<CardSchema>
  >;
}

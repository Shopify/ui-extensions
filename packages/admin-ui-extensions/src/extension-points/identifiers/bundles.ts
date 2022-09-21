import {RemoteRoot} from '@remote-ui/core';

import {CardSchema} from '../../containers';
import {
  // ContainerAction,
  RenderableExtensionCallback,
  StandardApi,
  ToastApi,
} from '../types';

export type BundlesExtensionPoint = 'Admin::Product::Bundles::Components';

export type BundlesStandardApi<T extends BundlesExtensionPoint> = StandardApi<
  T
> &
  ToastApi;

export type BundlesComponentsApi = BundlesStandardApi<
  'Admin::Product::Bundles::Components'
>;
// & {};

export interface BundlesExtensionApi {
  'Admin::Product::Bundles::Components': BundlesComponentsApi;
}

export interface BundlesExtensionPointCallback {
  'Admin::Product::Bundles::Components': RenderableExtensionCallback<
    BundlesExtensionApi['Admin::Product::Bundles::Components'],
    RemoteRoot<CardSchema>
  >;
}

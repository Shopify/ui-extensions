import {RemoteChild} from '@shopify/remote-ui-types';
import {RemoteRoot} from '@shopify/remote-ui-core';

export enum RenderRoot {
  Default = 'default',
}

export interface RenderRootMap {
  [RenderRoot.Default]: [DefaultRoot, {}];
}

export type RootTypeForRoot<T extends RenderRoot> = RenderRootMap[T][0];
export type DataTypeForRoot<T extends RenderRoot> = RenderRootMap[T][1];

export type DefaultRoot = RemoteRoot<any, RemoteChild>;

export interface ShopifyApi {
  registerRender<T extends RenderRoot>(root: T, render: (...args: RenderRootMap[T]) => void): void;
}

export interface ShopifyGlobal {
  readonly shopify: ShopifyApi;
}

import {
  createRemoteRoot,
  RemoteRoot,
  RemoteChannel,
  RemoteComponentType,
} from '@shopify/remote-ui-core';
import {retain} from '@shopify/web-worker';
import {RenderRootMap, ShopifyGlobal} from '../types';
import {RenderRoot, ShopifyApi, RootTypeForRoot, DataTypeForRoot} from '../types';

const renderMap = new Map<RenderRoot, (root: RemoteRoot<any, any>, data: any) => void>();

export const api: ShopifyApi = {
  registerRender(root, render) {
    renderMap.set(root, render);
  },
};

export function load(script: string) {
  //@ts-ignore
  importScripts(script);
}

function renderRootWithRemote<T extends RenderRoot>(
  render: T,
  data: DataTypeForRoot<T>,
  root: RootTypeForRoot<T>,
) {
  renderMap.get(render)!(root, data);
  return true;
}

export type RenderRootComponentMap = {
  [key in RenderRoot]: RemoteComponentType<any>[];
};

export function renderFactory(renderRootComponentMap: RenderRootComponentMap) {
  return <T extends RenderRoot>(
    renderRoot: T,
    data: DataTypeForRoot<T>,
    receive: RemoteChannel,
  ) => {
    if (!renderMap.has(renderRoot)) {
      return false;
    }

    retain(receive);
    retain(data);

    return renderRootWithRemote(
      RenderRoot.Default,
      data as any,
      createRemoteRoot(receive, {
        components: renderRootComponentMap[renderRoot],
      }),
    );
  };
}

export function registerRender<T extends RenderRoot>(
  root: T,
  render: (...args: RenderRootMap[T]) => void,
) {
  ((self as any) as ShopifyGlobal).shopify.registerRender(root, render);
}

import {RenderRoot, RenderRootMap} from './roots';

export interface ShopifyApi {
  registerRender<T extends RenderRoot>(root: T, render: (...args: RenderRootMap[T]) => void): void;
}

export interface ShopifyGlobal {
  readonly shopify: ShopifyApi;
}

export function registerRender<T extends RenderRoot>(
  root: T,
  render: (...args: RenderRootMap[T]) => void,
) {
  ((self as any) as ShopifyGlobal).shopify.registerRender(root, render);
}

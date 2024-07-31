import {StandardApi} from './api/standard/standard-api';
import {
  // eslint-disable-next-line import/no-deprecated
  SmartGridApi,
  OrderApi,
  CartApi,
  CustomerApi,
  ComplianceExtensionApi,
  PrinterExtensionApi,
} from './api';
import {RenderExtension} from './extension';
import type {Components} from './shared';
import {AnyComponentBuilder} from '../../shared';
import {ActionApi} from './api/action-api/action-api';
import {ProductApi} from './api/product-api/product-api';
import {ActionTargetApi} from './api/action-target-api/action-target-api';
import {DraftOrderApi} from './api/draft-order-api/draft-order-api';

type SmartGridComponents = AnyComponentBuilder<Pick<Components, 'Tile'>>;
type ActionComponents = AnyComponentBuilder<Pick<Components, 'ActionItem'>>;
type BasicComponents = AnyComponentBuilder<Omit<Components, 'Tile'>>;

export interface ExtensionTargets {
  'pos.home.tile.render': RenderExtension<
    // eslint-disable-next-line import/no-deprecated
    StandardApi<'pos.home.tile.render'> & SmartGridApi & ActionApi & CartApi,
    SmartGridComponents
  >;
  'pos.home.modal.render': RenderExtension<
    ActionTargetApi<'pos.home.modal.render'> & CartApi,
    BasicComponents
  >;
  'pos.purchase.post.action.menu-item.render': RenderExtension<
    StandardApi<'pos.purchase.post.action.menu-item.render'> &
    ActionApi &
    OrderApi,
    ActionComponents
  >;
  'pos.purchase.post.action.render': RenderExtension<
    ActionTargetApi<'pos.purchase.post.action.render'> & OrderApi,
    BasicComponents
  >;
  'pos.product-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.product-details.action.menu-item.render'> &
    ActionApi &
    CartApi &
    ProductApi,
    ActionComponents
  >;
  'pos.product-details.action.render': RenderExtension<
    ActionTargetApi<'pos.product-details.action.render'> & CartApi & ProductApi,
    BasicComponents
  >;
  'pos.order-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.order-details.action.menu-item.render'> &
    ActionApi &
    CartApi &
    OrderApi,
    ActionComponents
  >;
  'pos.order-details.action.render': RenderExtension<
    ActionTargetApi<'pos.order-details.action.render'> & CartApi & OrderApi,
    BasicComponents
  >;
  'pos.draft-order-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.draft-order-details.action.menu-item.render'> &
    ActionApi &
    CartApi &
    DraftOrderApi,
    ActionComponents
  >;
  'pos.draft-order-details.action.render': RenderExtension<
    ActionTargetApi<'pos.draft-order-details.action.render'> &
    DraftOrderApi &
    CartApi,
    BasicComponents
  >;
  'pos.customer-details.action.menu-item.render': RenderExtension<
    StandardApi<'pos.customer-details.action.menu-item.render'> &
    ActionApi &
    CartApi &
    CustomerApi,
    ActionComponents
  >;
  'pos.customer-details.action.render': RenderExtension<
    ActionTargetApi<'pos.customer-details.action.render'> &
    CartApi &
    CustomerApi,
    BasicComponents
  >;
  'pos.global.compliance.checkout': RenderExtension<
    StandardApi<'pos.global.compliance.checkout'> &
    OrderApi &
    ComplianceExtensionApi,
    BasicComponents
  >;
  'pos.global.compliance.printer': RenderExtension<
    StandardApi<'pos.global.compliance.printer'> &
    PrinterExtensionApi
  >;
}

export type ExtensionTarget = keyof ExtensionTargets;

export type ExtensionForExtensionTarget<T extends ExtensionTarget> =
  ExtensionTargets[T];

/**
 * For a given extension target, returns the value that is expected to be
 * returned by that extension target’s callback type.
 */
export type ReturnTypeForExtension<ID extends keyof ExtensionTargets> =
  ReturnType<ExtensionTargets[ID]>;

/**
 * For a given extension target, returns the tuple of arguments that would
 * be provided to that extension target’s callback type.
 */
export type ArgumentsForExtension<ID extends keyof ExtensionTargets> =
  Parameters<ExtensionTargets[ID]>;

/**
 * A union type containing all of the extension targets that follow the pattern of
 * accepting a [`@remote-ui/core` `RemoteRoot`](https://github.com/Shopify/remote-dom/tree/remote-ui/packages/core)
 * and an additional `api` argument, and using those arguments to render
 * UI.
 */
export type RenderExtensionTarget = {
  [ID in keyof ExtensionTargets]: ExtensionTargets[ID] extends RenderExtension<
    any,
    any
  >
  ? ID
  : never;
}[keyof ExtensionTargets];

/**
 * A mapping of each “render extension” name to its callback type.
 */
export type RenderExtensions = {
  [ID in RenderExtensionTarget]: ExtensionTargets[ID];
};

type ExtractedApiFromRenderExtension<T> = T extends RenderExtension<
  infer Api,
  any
>
  ? Api
  : never;

type ExtractedAllowedComponentsFromRenderExtension<T> =
  T extends RenderExtension<any, infer Components> ? Components : never;

/**
 * For a given rendering extension target, returns the type of the API that the
 * extension will receive at runtime. This API type is the second argument to
 * the callback for that extension target. The first callback for all of the rendering
 * extension targets each receive a `RemoteRoot` object.
 */
export type ApiForRenderExtension<ID extends keyof RenderExtensions> =
  ExtractedApiFromRenderExtension<RenderExtensions[ID]>;

/**
 * For a given rendering extension target, returns the UI components that the
 * extension target supports.
 */
export type AllowedComponentsForRenderExtension<
  ID extends keyof RenderExtensions,
> = ExtractedAllowedComponentsFromRenderExtension<RenderExtensions[ID]>;

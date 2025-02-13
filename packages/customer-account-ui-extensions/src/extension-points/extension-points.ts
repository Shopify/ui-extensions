import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';
import type {RenderExtension, RunExtension} from './extension-signature';
import type {StandardApi} from './standard-api';
import {FullExtensionNavigation} from './standard-api/navigation';

type Components = typeof import('../components');

type AllComponents = Components[keyof Components];

/**
 * A UI extension will register for one or more extension points using `shopify.extend()`.
 * An extension point in a UI extension is a plain JavaScript function.
 * This function receives some API for interacting with the application,
 * and is expected to return a value in a specific shape.
 * The input arguments and the output type are different
 * for each extension point.
 */
export interface ExtensionPoints {
  'CustomerAccount::FullPage::RenderWithin': RenderExtension<
    Omit<StandardApi<'CustomerAccount::FullPage::RenderWithin'>, 'navigation'> &
      FullPageApi,
    AllComponents
  >;
  'CustomerAccount::Returns::Initiate': RunExtension<
    StandardApi<'CustomerAccount::Returns::Initiate'> & {orderId: string},
    void
  >;
  'CustomerAccount::KitchenSink': RenderExtension<
    StandardApi<'CustomerAccount::KitchenSink'> & {name: string},
    AllComponents
  >;
  'CustomerAccount::KitchenSinkRun': RunExtension<
    StandardApi<'CustomerAccount::KitchenSinkRun'> & {name: string},
    string
  >;
  'customer-account.dynamic.render': RenderExtension<
    StandardApi<'customer-account.dynamic.render'>,
    AllComponents
  >;
  'customer-account.order-index.block.render': RenderExtension<
    StandardApi<'customer-account.order-index.block.render'>,
    AllComponents
  >;
  'customer-account.profile.block.render': RenderExtension<
    StandardApi<'customer-account.profile.block.render'>,
    AllComponents
  >;
  'customer-account.profile.company-details.render-after': RenderExtension<
    StandardApi<'customer-account.profile.company-details.render-after'>,
    AllComponents
  >;
  'customer-account.profile.addresses.render-after': RenderExtension<
    StandardApi<'customer-account.profile.addresses.render-after'>,
    AllComponents
  >;
  'customer-account.profile.payment.render-after': RenderExtension<
    StandardApi<'customer-account.profile.payment.render-after'>,
    AllComponents
  >;
  'customer-account.profile.staff-and-permissions.render-after': RenderExtension<
    StandardApi<'customer-account.profile.staff-and-permissions.render-after'>,
    AllComponents
  >;
  'customer-account.order.action.menu-item.render': RenderExtension<
    StandardApi & {orderId: string},
    AllComponents
  >;
  'customer-account.order.action.render': RenderExtension<
    StandardApi & ActionExtensionApi & {orderId: string},
    AllComponents
  >;
  'customer-account.navigation.menu-item.render': RenderExtension<
    StandardApi<'customer-account.navigation.menu-item.render'>,
    AllComponents
  >;
}

export interface FullPageApi {
  location: StatefulRemoteSubscribable<{
    pathname: string;
    search: string;
  }>;
  navigation: FullExtensionNavigation;
}

export interface ActionExtensionApi {
  close(): void;
}

export type ExtensionPoint = keyof ExtensionPoints;

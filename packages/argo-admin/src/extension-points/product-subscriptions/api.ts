import {ContainerApi, ToastApi, DataApi} from '../../extension-api';
import {ExtensionPoint} from '..';
import {StandardApi} from '../standard-api';

export type SubscriptionApi<T extends ExtensionPoint> = StandardApi<T> &
  ContainerApi<T> &
  ToastApi &
  DataApi<T>;

export interface ProductSubscriptionExtensionApi {
  // Product Subscription
  'Admin::Product::SubscriptionPlan::Create': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Create'
  >;
  'Admin::Product::SubscriptionPlan::Add': SubscriptionApi<'Admin::Product::SubscriptionPlan::Add'>;
  'Admin::Product::SubscriptionPlan::Edit': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Edit'
  >;
  'Admin::Product::SubscriptionPlan::Remove': SubscriptionApi<
    'Admin::Product::SubscriptionPlan::Remove'
  >;
}

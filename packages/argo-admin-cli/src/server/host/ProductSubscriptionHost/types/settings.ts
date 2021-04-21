import {ExtensionData} from '@shopify/argo-admin';

export enum ProductSubscriptionAction {
  Create = 'CREATE',
  Edit = 'EDIT',
  Remove = 'REMOVE',
  Add = 'ADD',
}

export type SubscriptionData = {
  action: ProductSubscriptionAction;
} & ExtensionData<'Admin::Product::SubscriptionPlan::Add'> &
  ExtensionData<'Admin::Product::SubscriptionPlan::Create'> &
  ExtensionData<'Admin::Product::SubscriptionPlan::Edit'> &
  ExtensionData<'Admin::Product::SubscriptionPlan::Remove'>;

export interface Settings {
  locale?: string;
  sessionToken?: string;
  data?: SubscriptionData;
  extensionOpen?: boolean;
}

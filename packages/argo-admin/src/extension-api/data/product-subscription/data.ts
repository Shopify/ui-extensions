import {ExtensionPoint} from '../../../extension-points';

export interface Add {
  productId: string;
  variantId?: string;
}

export interface Create {
  productId: string;
  variantId?: string;
}

export interface Edit {
  sellingPlanGroupId: string;
  productId: string;
  variantId?: string;
}

export interface Remove {
  sellingPlanGroupId: string;
  productId: string;
  variantId?: string;
  variantIds: string[];
}

export type DataOf<T extends ExtensionPoint> = T extends 'Admin::Product::SubscriptionPlan::Add'
  ? Add
  : T extends 'Admin::Product::SubscriptionPlan::Create'
  ? Create
  : T extends 'Admin::Product::SubscriptionPlan::Edit'
  ? Edit
  : T extends 'Admin::Product::SubscriptionPlan::Remove'
  ? Remove
  : never;

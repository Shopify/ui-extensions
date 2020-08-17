import {ExtensionPoint} from '../../../extension-point';

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

export type DataOf<T extends ExtensionPoint> = T extends ExtensionPoint.SubscriptionManagementAdd
  ? Add
  : T extends ExtensionPoint.SubscriptionManagementCreate
  ? Create
  : T extends ExtensionPoint.SubscriptionManagementEdit
  ? Edit
  : T extends ExtensionPoint.SubscriptionManagementRemove
  ? Remove
  : never;

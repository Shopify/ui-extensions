import {ExtensionPoint} from '../../extension-points';

export enum SubscriptionManagementActions {
  Create = 'CREATE',
  Edit = 'EDIT',
  Remove = 'REMOVE',
  Add = 'ADD',
}

export declare namespace SubscriptionManagementData {
  type Actions = SubscriptionManagementActions;

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
    ? SubscriptionManagementData.Add
    : T extends ExtensionPoint.SubscriptionManagementCreate
    ? SubscriptionManagementData.Create
    : T extends ExtensionPoint.SubscriptionManagementEdit
    ? SubscriptionManagementData.Edit
    : T extends ExtensionPoint.SubscriptionManagementRemove
    ? SubscriptionManagementData.Remove
    : never;
}

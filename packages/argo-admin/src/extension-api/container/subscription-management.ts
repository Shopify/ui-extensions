import {ExtensionPoint} from '../../extension-points';

export interface SubscriptionManagementContainer {
  close(): void;
  done(): void;
}

export type SubscriptionManangementExtensionPoint =
  | ExtensionPoint.SubscriptionManagementAdd
  | ExtensionPoint.SubscriptionManagementCreate
  | ExtensionPoint.SubscriptionManagementEdit
  | ExtensionPoint.SubscriptionManagementRemove;

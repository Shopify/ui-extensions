import {ExtensionPoint} from '../../../extension-point';

export type SubscriptionManagementExtensionPoint =
  | ExtensionPoint.SubscriptionManagementAdd
  | ExtensionPoint.SubscriptionManagementCreate
  | ExtensionPoint.SubscriptionManagementEdit
  | ExtensionPoint.SubscriptionManagementRemove;

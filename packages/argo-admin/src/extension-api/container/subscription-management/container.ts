import {ExtensionPoint} from '../../../extension-point';
import {ContainerAction} from '../container-action';

interface SubscriptionManagementCallbacks {
  close(): void;
  done(): void;
}

interface SubscriptionManagementActions {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type ContainerOf<
  T extends ExtensionPoint
> = T extends 'Admin::Product::SubscriptionPlan::Add'
  ? SubscriptionManagementCallbacks & SubscriptionManagementActions
  : T extends 'Admin::Product::SubscriptionPlan::Create'
  ? SubscriptionManagementCallbacks
  : T extends 'Admin::Product::SubscriptionPlan::Edit'
  ? SubscriptionManagementCallbacks
  : T extends 'Admin::Product::SubscriptionPlan::Remove'
  ? SubscriptionManagementCallbacks & SubscriptionManagementActions
  : never;

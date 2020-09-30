import {ExtensionPoint} from '../../../extension-point';
import {ContainerAction} from '../container-action';

interface ProductSubscriptionCallbacks {
  close(): void;
  done(): void;
}

interface ProductSubscriptionActions {
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type ContainerOf<
  T extends ExtensionPoint
> = T extends 'Admin::Product::SubscriptionPlan::Add'
  ? ProductSubscriptionCallbacks & ProductSubscriptionActions
  : T extends 'Admin::Product::SubscriptionPlan::Create'
  ? ProductSubscriptionCallbacks
  : T extends 'Admin::Product::SubscriptionPlan::Edit'
  ? ProductSubscriptionCallbacks
  : T extends 'Admin::Product::SubscriptionPlan::Remove'
  ? ProductSubscriptionCallbacks & ProductSubscriptionActions
  : never;

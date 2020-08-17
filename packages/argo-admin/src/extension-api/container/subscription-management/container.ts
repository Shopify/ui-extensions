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
> = T extends ExtensionPoint.SubscriptionManagementAdd
  ? SubscriptionManagementCallbacks & SubscriptionManagementActions
  : T extends ExtensionPoint.SubscriptionManagementCreate
  ? SubscriptionManagementCallbacks
  : T extends ExtensionPoint.SubscriptionManagementEdit
  ? SubscriptionManagementCallbacks
  : T extends ExtensionPoint.SubscriptionManagementRemove
  ? SubscriptionManagementCallbacks & SubscriptionManagementActions
  : never;

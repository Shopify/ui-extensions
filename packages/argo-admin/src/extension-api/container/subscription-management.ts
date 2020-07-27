import {ExtensionPoint} from '../../extension-points';
import {ContainerAction} from './container-action';

export namespace SubscriptionManagementContainer {
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
}

export type SubscriptionManagementExtensionPoint =
  | ExtensionPoint.SubscriptionManagementAdd
  | ExtensionPoint.SubscriptionManagementCreate
  | ExtensionPoint.SubscriptionManagementEdit
  | ExtensionPoint.SubscriptionManagementRemove;

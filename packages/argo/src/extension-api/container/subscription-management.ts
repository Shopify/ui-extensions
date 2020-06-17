import {ExtensionPoint} from '../../extension-points';

export interface ContainerAction {
  content: string;
  onAction(): void;
}

export interface SubscriptionManagementContainer {
  close(): void;
  done(): void;
  setPrimaryAction(containerAction?: ContainerAction): void;
  setSecondaryAction(containerAction?: ContainerAction): void;
}

export type SubscriptionManangementExtension =
  | ExtensionPoint.SubscriptionManagementAdd
  | ExtensionPoint.SubscriptionManagementCreate
  | ExtensionPoint.SubscriptionManagementEdit
  | ExtensionPoint.SubscriptionManagementRemove;

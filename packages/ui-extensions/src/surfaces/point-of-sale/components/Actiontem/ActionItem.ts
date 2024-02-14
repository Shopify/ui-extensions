import {createRemoteComponent} from '@remote-ui/core';

export interface ActionItem {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  onPress: () => void;
  badgeValue: number;
  destructive?: boolean;
}

export const ActionMenuItem = createRemoteComponent<'ActionItem', ActionItem>(
  'ActionItem',
);

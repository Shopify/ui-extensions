import {createRemoteComponent} from '@remote-ui/core';

export interface ActionItemProps {
  title: string;
  subtitle?: string;
  enabled?: boolean;
  onPress: () => void;
  badgeValue: number;
  destructive?: boolean;
}

export const ActionItem = createRemoteComponent<'ActionItem', ActionItemProps>(
  'ActionItem',
);

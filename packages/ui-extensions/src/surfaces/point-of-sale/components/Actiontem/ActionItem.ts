import {createRemoteComponent} from '@remote-ui/core';

export interface ActionItemProps {
  enabled?: boolean;
  onPress: () => void;
}

export const ActionItem = createRemoteComponent<'ActionItem', ActionItemProps>(
  'ActionItem',
);

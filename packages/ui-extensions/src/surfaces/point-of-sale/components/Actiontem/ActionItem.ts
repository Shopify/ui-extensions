import {createRemoteComponent} from '@remote-ui/core';

/**
 * @publicDocs
 */
export interface ActionItemProps {
  /**
   * Sets whether or not the ActionItem can be tapped.
   */
  enabled?: boolean;
  /**
   * The callback that is executed when the user taps the ActionItem.
   */
  onPress: () => void;
}

export const ActionItem = createRemoteComponent<'ActionItem', ActionItemProps>(
  'ActionItem',
);

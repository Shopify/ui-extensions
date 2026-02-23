import {createRemoteComponent} from '@remote-ui/core';

/**
 * @deprecated ActionItem has been deprecated. Please use the [Button Component](/docs/api/pos-ui-extensions/components/) instead.
 *
 * Renders an interactive button component as an entry point for action menu item and block extensions. The text displayed on the ActionItem is determined by the extension's description in your configuration file. Use ActionItem to create tappable surfaces that trigger extension workflows or present modal interfaces.
 *
 * Note: ActionItem is deprecated in favor of the more flexible Button component which provides additional styling options and better consistency across POS interfaces.
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

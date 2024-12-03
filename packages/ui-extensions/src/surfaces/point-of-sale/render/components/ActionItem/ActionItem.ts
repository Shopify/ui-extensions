import {createRemoteComponent} from '@remote-ui/core';

/**
 * Renders an `ActionItem` on action targets. Note that the text displayed on this `ActionItem`
 * is dependent on the description of the extension.
 * @property `enabled` sets whether or not the `ActionItem` can be tapped.
 * @property `onPress` the callback that is executed when the user taps the `ActionItem`.
 */
export interface ActionItemProps {
  /**
   * Sets whether or not the `ActionItem` can be tapped.
   * @deprecated ActionItem has been deprecated. Use the Button component instead.
   */
  enabled?: boolean;
  /**
   * The callback that is executed when the user taps the `ActionItem`.
   * @deprecated ActionItem has been deprecated. Use the Button component instead.
   */
  onPress: () => void;
}

export const ActionItem = createRemoteComponent<'ActionItem', ActionItemProps>(
  'ActionItem',
);

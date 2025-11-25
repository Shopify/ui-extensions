import {createRemoteComponent} from '@remote-ui/core';

export interface POSBlockProps {
  /**
   * An optional action button configuration to be displayed on the `POSBlock`.
   */
  action?: {
    /**
     * The text displayed on the action button. Use clear, action-oriented language like "View Details" or "Update Status."
     */
    title: string;
    /**
     * Controls whether the action button can be pressed. When `true`, the button is disabled and users cannot interact with it.
     *
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * A callback function executed when the action button is pressed. Use this to handle user interactions such as navigation or triggering specific actions.
     */
    onPress: () => void;
  };
}

export const POSBlock = createRemoteComponent<'POSBlock', POSBlockProps>(
  'POSBlock',
);

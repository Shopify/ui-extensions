import {createRemoteComponent} from '@remote-ui/core';

/**
 * Renders a `POSBlockRow` in a `POSBlock`.
 */
export interface POSBlockRowProps {
  /**
   * Whether to remove the default padding from the `POSBlockRow`.
   * @defaultValue false
   */
  removeInsets?: boolean;

  /**
   * A callback for when the row is tapped.
   * @defaultValue undefined
   */
  onPress?: () => void;
}

export const POSBlockRow = createRemoteComponent<
  'POSBlockRow',
  POSBlockRowProps
>('POSBlockRow');

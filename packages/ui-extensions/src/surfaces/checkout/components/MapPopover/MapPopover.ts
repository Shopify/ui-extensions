import {createRemoteComponent} from '@remote-ui/core';

export interface MapPopoverProps {
  /**
   * Callback to run when the Popover is closed.
   */
  onClose?(): void;
  /**
   * Callback to run when the Popover is opened.
   */
  onOpen?(): void;
}

/**
 * Use the `MapPopover` component to provide additional details about a single geographic location such as a shipping address or package pickup location.
 */
export const MapPopover = createRemoteComponent<'MapPopover', MapPopoverProps>(
  'MapPopover',
);

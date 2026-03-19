import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/**
 * MapPopover provides additional information or context about a specific location or point of interest on a map.
 * @publicDocs
 */
export interface MapPopoverProps extends IdProps {
  /**
   * A callback that fires when the popover is closed. Use this to
   * clean up state or update the UI when the user dismisses the popover.
   */
  onClose?(): void;
  /**
   * A callback that fires when the popover is opened. Use this to
   * load additional data or update the UI when the popover becomes visible.
   */
  onOpen?(): void;
}

/**
 * Use the `MapPopover` component to provide additional details about a single geographic location such as a shipping address or package pickup location.
 */
export const MapPopover = createRemoteComponent<'MapPopover', MapPopoverProps>(
  'MapPopover',
);

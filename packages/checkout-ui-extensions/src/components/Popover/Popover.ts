import {createRemoteComponent} from '@remote-ui/core';

import type {Alignment, IdProps} from '../shared';

export type PopoverPosition =
  | 'inlineStart'
  | 'inlineEnd'
  | 'blockStart'
  | 'blockEnd';

export interface PopoverProps extends IdProps {
  /**
   * Position the Popover relative to the activator.
   * @defaultValue 'blockStart'
   */
  position?: PopoverPosition;
  /**
   * Align the Popover in the axis determined by the position.
   * @defaultValue 'center'
   */
  alignment?: Alignment;
  /**
   * Callback to run when the Popover is opened
   */
  onOpen?: () => void;
  /**
   * Callback to run when the Popover is closed
   */
  onClose?: () => void;
}

/**
 * Popovers are similar to tooltips. They are small overlays that open on demand after a user interaction.
 * The difference is that the popover can contain more content, without cluttering the page.
 * They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).
 *
 * The library takes care of applying the WAI-ARIA Popover Widget pattern automatically for the activator
 * and the popover content.
 */
export const Popover = createRemoteComponent<'Popover', PopoverProps>(
  'Popover',
);

import {createRemoteComponent} from '@remote-ui/core';

import type {Alignment, IdProps, SizingProps, SpacingProps} from '../shared';

/**
 * The position of the popover relative to its activator element.
 *
 * - `'inlineStart'`: Positions the popover to the left (in LTR layouts) of the activator.
 * - `'inlineEnd'`: Positions the popover to the right (in LTR layouts) of the activator.
 * - `'blockStart'`: Positions the popover above the activator.
 * - `'blockEnd'`: Positions the popover below the activator.
 */
export type PopoverPosition =
  | 'inlineStart'
  | 'inlineEnd'
  | 'blockStart'
  | 'blockEnd';

/**
 * Popovers are similar to tooltips. They are small overlays that open on demand after a user interaction. The difference is that the popover can contain more content, without cluttering the page. They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).

The library automatically applies the WAI-ARIA Popover Widget pattern to both the activator and the popover content.
 * @publicDocs
 */
export interface PopoverProps
  extends IdProps,
    Pick<SizingProps, 'maxInlineSize' | 'minInlineSize'>,
    Pick<SpacingProps, 'padding'> {
  /**
   * The position of the popover relative to the activator.
   * @defaultValue 'blockStart'
   */
  position?: PopoverPosition;
  /**
   * The alignment of the popover in the axis determined by the position.
   * @defaultValue 'center'
   */
  alignment?: Alignment;
  /**
   * A callback fired when the popover is opened.
   */
  onOpen?: () => void;
  /**
   * A callback fired when the popover is closed.
   */
  onClose?: () => void;
}

/**
 * Popovers are similar to tooltips. They are small overlays that open on demand after a user interaction. The difference is that the popover can contain more content, without cluttering the page. They must be specified inside the `overlay` prop of an activator component (`Button`, `Link`, or `Pressable`).
 *
 * The library automatically applies the WAI-ARIA Popover Widget pattern to both the activator and the popover content.
 */
export const Popover = createRemoteComponent<'Popover', PopoverProps>(
  'Popover',
);

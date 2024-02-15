import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

export interface SheetProps extends IdProps {
  /**
   * A label to describe the purpose of the sheet that is announced by screen readers.
   * If not set, it will use the value of `heading`.
   */
  accessibilityLabel?: string;

  /**
   * Indicates whether the sheet should be open by default.
   *
   * When used in conjunction with the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`), the sheet will only be opened when the activator is pressed.
   */
  defaultOpen?: boolean;

  /** A heading rendered at the top of the sheet. */
  heading?: string;

  /**
   * Adjust the padding of all edges.
   *
   * `base`: applies padding that is appropriate for the element. Note that it may result in no padding if Shopify
   * believes this is the right design decision in a particular context.
   *
   * `none`: removes all padding from the element. This can be useful when elements inside the Sheet need to span
   * to the edge of the Sheet. For example, a full-width image. In this case, rely on `View` or any other layout
   * element to bring back the desired padding for the rest of the content.
   *
   * @default 'base'
   */
  padding?: 'base' | 'none';

  /** Callback fired when the sheet is opened. */
  onShow?(): void;

  /** Callback fired when the sheet is closed. */
  onHide?(): void;
}

/**
 * Sheet serves as a container that can display various types of content
 * such as forms, tables, or informational messages. It can be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).
 *
 * The library takes care of applying the WAI-ARIA Dialog pattern automatically for the activator
 * and the sheet content.
 */
export const Sheet = createRemoteComponent<'Sheet', SheetProps>('Sheet');

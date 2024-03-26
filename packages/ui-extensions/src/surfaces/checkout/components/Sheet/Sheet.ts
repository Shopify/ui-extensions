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
   * `base` and `true`: applies padding that is appropriate for the element. Note that it may result in no padding if Shopify
   * believes this is the right design decision in a particular context.
   *
   * `none` and `false`: removes all padding from the element. This can be useful when elements inside the Sheet need to span
   * to the edge of the Sheet. For example, a full-width image. In this case, rely on `Box` or any other layout
   * element to bring back the desired padding for the rest of the content.
   *
   * @default true
   */
  padding?: 'base' | 'none' | boolean;

  /** Callback fired when the sheet is opened. */
  onShow?(): void;

  /** Callback fired when the sheet is closed. */
  onHide?(): void;
}

/**
 * Sheet is designed to be used on top of other elements in a user interface and is typically bound to the bottom of a page.
 * Sheet can contain and display various types of content such as forms, or informational messages.
 * Unlike a Modal, which interrupts user flow, a Sheet offers a less intrusive, fluid experience.
 *
 * The library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the sheet content.
 */
export const Sheet = createRemoteComponent<'Sheet', SheetProps>('Sheet');

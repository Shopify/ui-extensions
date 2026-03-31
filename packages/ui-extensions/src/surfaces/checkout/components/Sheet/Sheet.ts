import type {RemoteFragment} from '@remote-ui/core';
import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

export interface SheetProps extends IdProps {
  /**
   * A label that describes the purpose of the sheet, announced by screen readers. If not set, it will use the value of `heading`.
   */
  accessibilityLabel?: string;

  /**
   * Whether the sheet should be open when it first renders. Use sparingly — only when the user must interact with the sheet before proceeding (for example, a privacy consent prompt). Only takes effect on the initial render.
   */
  defaultOpen?: boolean;

  /**
   * A heading rendered at the top of the sheet.
   */
  heading?: string;

  /**
   * A callback fired when the sheet is opened.
   */
  onShow?(): void;

  /**
   * A callback fired when the sheet is closed.
   */
  onHide?(): void;

  /**
   * The primary action to perform, provided as a Button component. Up to two buttons can be rendered.
   */
  primaryAction?: RemoteFragment;

  /**
   * The secondary action to perform, provided as a Button component. Only one button can be rendered.
   */
  secondaryAction?: RemoteFragment;
}

/**
 * A sheet is designed to be used on top of other elements in a user interface and is typically bound to the bottom of a page. It can contain and display various types of content such as forms or informational messages. Unlike a modal, which interrupts user flow, a sheet offers a less intrusive, fluid experience.
 *
 * The library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the sheet content.
 */
export const Sheet = createRemoteComponent<'Sheet', SheetProps>('Sheet');

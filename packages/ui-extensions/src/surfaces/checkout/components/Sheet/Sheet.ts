import type {RemoteFragment} from '@remote-ui/core';
import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/** @publicDocs */
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
   * The primary action to perform, provided as a button component. Up to two buttons can be rendered.
   */
  primaryAction?: RemoteFragment;

  /**
   * The secondary action to perform, provided as a button component. Only one button can be rendered.
   */
  secondaryAction?: RemoteFragment;
}

export const Sheet = createRemoteComponent<'Sheet', SheetProps>('Sheet');

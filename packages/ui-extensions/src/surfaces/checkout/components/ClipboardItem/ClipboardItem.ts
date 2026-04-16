import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/** @publicDocs */
export interface ClipboardItemProps extends IdProps {
  /**
   * The plain text content to copy to the clipboard when this component is activated. For example, a discount code, order number, or tracking URL.
   *
   * @default ''
   */
  text?: string;

  /**
   * A callback fired when the text is successfully copied to the clipboard. Use this to show a confirmation message or update the UI.
   */
  onCopy?: () => void;

  /**
   * A callback fired when the copy to clipboard fails. Use this to display an error message or provide a fallback action.
   */
  onCopyError?: () => void;
}

/**
 * Enables clipboard functionality when its `id` is referenced by the `activateTarget` property of a `Button`, `Pressable`, or `Link` component.
 *
 * When activated, it copies the text to the clipboard and displays a `Tooltip` confirmation.
 *
 * ClipboardItem` is a non-rendering component.
 */
export const ClipboardItem = createRemoteComponent<
  'ClipboardItem',
  ClipboardItemProps
>('ClipboardItem');

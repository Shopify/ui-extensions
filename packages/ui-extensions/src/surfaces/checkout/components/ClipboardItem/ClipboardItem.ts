import {createRemoteComponent} from '@remote-ui/core';
import type {ClipboardItemProps as BaseClipboardItemProps} from '@shopify/ui-api-design/dist/components/ClipboardItem';

export interface ClipboardItemProps extends BaseClipboardItemProps {}

/**
 * Enables clipboard functionality when its `id` is referenced by the `commandFor` property of a `Button`, `Pressable`, or `Link` component.
 *
 * When activated, it copies the text to the clipboard and displays a `Tooltip` confirmation.
 *
 * ClipboardItem` is a non-rendering component.
 */
export interface ClipboardItemElement
  extends Omit<ClipboardItemProps, 'onCopy' | 'onCopyError'>,
    Omit<HTMLElement, 'id' | 'oncopy'> {
  oncopy: ClipboardItemProps['onCopy'];
  oncopyerror: ClipboardItemProps['onCopyError'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-clipboard-item': ClipboardItemElement;
  }
}

export const ClipboardItem = createRemoteComponent<
  'ClipboardItem',
  ClipboardItemProps
>('ClipboardItem');

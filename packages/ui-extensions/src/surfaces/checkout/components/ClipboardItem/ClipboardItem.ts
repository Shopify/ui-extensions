import type {ClipboardItemProps as BaseClipboardItemProps} from '@shopify/ui-api-design';

export interface ClipboardItemProps extends BaseClipboardItemProps {}

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

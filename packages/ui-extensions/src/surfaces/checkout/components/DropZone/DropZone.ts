import type {DropZoneProps as BaseDropZoneProps} from '@shopify/ui-api-design';

export interface DropZoneProps
  extends Omit<
    BaseDropZoneProps,
    'onChange' | 'value' | 'labelAccessibilityVisibility'
  > {}

export interface DropZoneElement
  extends Omit<DropZoneProps, 'onDropRejected' | 'onInput'>,
    Omit<HTMLElement, 'id' | 'oninput'> {
  ondroprejected: DropZoneProps['onDropRejected'];
  oninput: DropZoneProps['onInput'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-drop-zone': DropZoneElement;
  }
}

import {createRemoteComponent} from '@remote-ui/core';
import type {DropZoneProps as BaseDropZoneProps} from '@shopify/ui-api-design/dist/components/DropZone';

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

export const DropZone = createRemoteComponent<'DropZone', DropZoneProps>(
  'DropZone',
);

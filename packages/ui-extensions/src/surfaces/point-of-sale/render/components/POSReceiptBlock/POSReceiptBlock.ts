import {createRemoteComponent} from '@remote-ui/core';
import {Image} from '../Image/Image';
import {Text} from '../Text/Text';

/**
 * Renders a `POSReceiptBlock`. A `POSReceiptBlock` only accepts
 * `Text` and `Image` as children (more to be added in the future).
 */
export interface POSReceiptBlockProps {}
export type AllowedChildrenComponents = typeof Text | typeof Image;

export const POSReceiptBlock = createRemoteComponent<
  'POSReceiptBlock',
  POSReceiptBlockProps,
  AllowedChildrenComponents
>('POSReceiptBlock');

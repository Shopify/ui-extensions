import {createRemoteComponent} from '@remote-ui/core';
import {QRCode} from '../QRCode/QRCode';
import {Text} from '../Text/Text';

export interface POSReceiptBlockProps {}
export type AllowedChildrenComponents = typeof Text | typeof QRCode;

export const POSReceiptBlock = createRemoteComponent<
  'POSReceiptBlock',
  POSReceiptBlockProps,
  AllowedChildrenComponents
>('POSReceiptBlock');

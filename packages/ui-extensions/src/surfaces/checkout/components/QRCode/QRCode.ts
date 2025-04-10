import {createRemoteComponent} from '@remote-ui/core';
import type {QRCodeProps as BaseQRCodeProps} from '@shopify/ui-api-design/dist/components/QRCode';

export interface QRCodeProps extends BaseQRCodeProps {
  /**
   * Adjust the border style.
   *
   * @default 'base'
   */
  border?: 'none' | 'base';
}

export const QRCode = createRemoteComponent<'QRCode', QRCodeProps>('QRCode');

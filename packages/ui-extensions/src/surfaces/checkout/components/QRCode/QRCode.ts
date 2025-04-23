import type {QRCodeProps as BaseQRCodeProps} from '@shopify/ui-api-design/dist/components/QRCode';

export interface QRCodeProps extends Omit<BaseQRCodeProps, 'border'> {
  /**
   * Adjust the border style.
   *
   * @default 'base'
   */
  border?: 'none' | 'base';
}

export interface QRCodelement
  extends Omit<QRCodeProps, 'onError'>,
    Omit<HTMLElement, 'id' | 'onerror'> {
  onerror: QRCodeProps['onError'];
}

declare global {
  interface HTMLElementTagNameMap {
    's-qr-code': QRCodelement;
  }
}

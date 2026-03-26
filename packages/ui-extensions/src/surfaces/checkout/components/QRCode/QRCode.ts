import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps, BorderStyle} from '../shared';

export interface QRCodeProps extends IdProps {
  /**
   * The data to encode in the QR code. Accepts any string, such as a URL,
   * email address, or plain text. Specific string formats can trigger
   * actions on the user’s device when scanned, like opening geolocation
   * coordinates on a map, launching an app, preparing an email, or
   * composing a text message.
   */
  content?: string;

  /**
   * The URL of an image to display in the center of the QR code. Use
   * this for branding or to indicate what scanning the QR code will do.
   * By default, no image is displayed.
   */
  logo?: string;

  /**
   * The displayed size of the QR code.
   *
   * - `auto`: The QR code is displayed at its default size.
   * - `fill`: The QR code takes up 100% of the available inline size
   *   and maintains a 1:1 aspect ratio.
   *
   * @defaultValue 'auto'
   */
  size?: 'auto' | 'fill';

  /**
   * The border style around the QR code.
   *
   * - `base`: A standard border that visually frames the QR code.
   * - `none`: No border is rendered.
   *
   * @defaultValue 'base'
   */
  border?: Extract<BorderStyle, 'none' | 'base'>;

  /**
   * A label that describes the purpose or contents of the QR code. When
   * set, it will be announced to users using assistive technologies and
   * will provide them with more context.
   *
   * @defaultValue 'QR code' (translated to the user’s locale)
   */
  accessibilityLabel?: string;

  /**
   * A callback that fires when the conversion of `content` to a QR code
   * fails. When an error occurs, the QR code and its child elements are
   * not displayed. Use this to show a fallback or error state.
   */
  onError?: () => void;
}

export const QRCode = createRemoteComponent<'QRCode', QRCodeProps>('QRCode');

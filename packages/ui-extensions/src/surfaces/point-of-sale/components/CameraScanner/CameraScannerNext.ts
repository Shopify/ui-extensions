import {createRemoteComponent} from '@remote-ui/core';

/**
 * @property scanStatus - the state of scanning the barcode.
 * @property overlayScannerText - the scanner overlay default text on top of the scanner window.
 * @property bannerMessage - The title of the banner.
 */
export interface CameraBarcodeScannerNextStateProps {
  /**
   * the state of scanning the barcode
   */
  scanStatus: 'error' | 'success' | 'scanning';

  /**
   * the scanner overlay default text on top of the scanner window.
   */
  overlayScannerText?: string;

  /**
   * The error banner message.
   */
  bannerMessage?: string;
}

export interface CameraScannerNextProps {
  cameraBarcodeScannerNextStateProp: CameraBarcodeScannerNextStateProps;
}

export const CameraScannerNext = createRemoteComponent<
  'CameraScannerNext',
  CameraScannerNextProps
>('CameraScannerNext');

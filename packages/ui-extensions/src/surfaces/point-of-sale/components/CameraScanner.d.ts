/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * The camera scanner uses the devices camera to scan and decode barcodes or QR codes.
 * It displays a live feed with guidance markers for alignment and triggers actions
 * within the app upon successful recognition.
 */
export interface CameraScannerProps {}

declare class CameraScanner
  extends PreactCustomElement
  implements CameraScannerProps
{
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: CameraScanner;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: CameraScannerJSXProps &
        PreactBaseElementPropsWithChildren<CameraScanner>;
    }
  }
}

declare const tagName = 's-camera-scanner';

export interface CameraScannerJSXProps extends Partial<CameraScannerProps> {
  id?: string;
}

export {CameraScanner};
export type {CameraScannerJSXProps};

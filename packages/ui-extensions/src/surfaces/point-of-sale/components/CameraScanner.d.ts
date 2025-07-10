/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * The camera scanner uses the devices camera to scan and decode barcodes or QR codes.
 * It displays a live feed with guidance markers for alignment and triggers actions
 * within the app upon successful recognition.
 */
export interface CameraScannerProps extends GlobalProps {}

declare class CameraScanner
  extends PreactCustomElement
  implements CameraScannerProps
{
  constructor();
  accessor id?: string;
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

export interface CameraScannerJSXProps extends Partial<CameraScannerProps> {}

export {CameraScanner};
export type {CameraScannerJSXProps};

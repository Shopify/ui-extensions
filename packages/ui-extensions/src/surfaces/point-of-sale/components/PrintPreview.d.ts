/** VERSION: 0.0.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
} from './shared.d.ts';

/**
 * A component that displays a preview of a printable document.
 * Use this component to let users review documents before printing.
 *
 * Note: Must be a direct child of Screen component.
 */
export interface PrintPreviewProps {
  /**
   * The source URL of the document to preview.
   * Accepts either:
   * - A relative path that will be appended to your app's application_url
   * - A full URL to your document endpoint
   */
  src: string;
}

declare class PrintPreview
  extends PreactCustomElement
  implements PrintPreviewProps
{
  accessor src: PrintPreviewProps['src'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: PrintPreview;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: PrintPreviewJSXProps &
        PreactBaseElementPropsWithChildren<PrintPreview>;
    }
  }
}

declare const tagName = 's-print-preview';

export interface PrintPreviewJSXProps
  extends Partial<Omit<PrintPreviewProps, 'src'>> {
  // src is required
  src: string;
  id?: string;
}

export {PrintPreview};
export type {PrintPreviewJSXProps};

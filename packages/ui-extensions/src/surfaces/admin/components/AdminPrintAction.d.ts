/** VERSION: 2.23.0 **/
/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable line-comment-position */
/* eslint-disable @typescript-eslint/unified-signatures */
/* eslint-disable no-var */
/* eslint-disable import/no-deprecated */
/* eslint-disable import/namespace */
/* eslint-disable import/no-deprecated */
// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AdminPrintActionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * Configure the following properties on the admin print action component.
 * @publicDocs
 */
export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {
  /**
   * The URL of the document to preview and print. Supports HTML, PDF, and image formats.
   * If not provided, the preview will show an empty state and the print button will be disabled.
   */
  src: AdminPrintActionProps$1['src'];
}

declare const tagName = 's-admin-print-action';
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the admin print action component.
 * @publicDocs
 */
declare class AdminPrintAction
  extends PolarisCustomElement
  implements AdminPrintActionProps
{
  /**
   * The `src` URL of the preview and the document to print. If not provided, the preview will show an empty state and the print button will be disabled. HTML, PDFs, and images are supported.
   */
  src: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdminPrintAction;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AdminPrintActionJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {AdminPrintAction};
export type {AdminPrintActionJSXProps};

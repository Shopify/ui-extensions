/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AdminPrintActionProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the admin print action component. These properties configure the source URL for printing content within admin extensions.
 * @publicDocs
 */
export interface AdminPrintActionProps
  extends Pick<AdminPrintActionProps$1, 'src'> {}

declare const tagName = 's-admin-print-action';
/**
 * The JSX props for the admin print action component. These properties extend `AdminPrintActionProps` with an optional `id` for element identification in JSX rendering.
 * @publicDocs
 */
export interface AdminPrintActionJSXProps
  extends Partial<AdminPrintActionProps>,
    Pick<AdminPrintActionProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * The admin print action custom element class that renders a print interface in the Shopify admin. This component enables merchants to print content from a specified source URL using the browser's print functionality.
 */
declare class AdminPrintAction
  extends PolarisCustomElement
  implements AdminPrintActionProps
{
  /**
   * The source URL of the content to print. This should point to the document or page that'll be sent to the printer when the merchant initiates the print action.
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

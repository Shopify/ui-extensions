/** VERSION: 1.64.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AdminBlockProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

/**
 * The properties for the admin block component. These properties configure the heading and collapsed summary of collapsible content blocks in the admin interface.
 * @publicDocs
 */
export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName = 's-admin-block';
/**
 * The JSX props for the admin block component. These properties extend `AdminBlockProps` with an optional `id` for element identification in JSX rendering.
 * @publicDocs
 */
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

/**
 * The admin block custom element class that renders a collapsible content block in the Shopify admin interface. This component organizes content into expandable sections with headings and provides a summary when collapsed.
 */
declare class AdminBlock
  extends PolarisCustomElement
  implements AdminBlockProps
{
  /**
   * The heading text to display at the top of the block. This title describes the content section the merchant is viewing. If not provided, no heading is displayed.
   */
  heading: string;
  /**
   * The summary text to display when the block is collapsed. This provides merchants with a preview of the block's contents without expanding it. If not provided, no summary is displayed.
   */
  collapsedSummary: string;
  constructor();
}
declare global {
  interface HTMLElementTagNameMap {
    [tagName]: AdminBlock;
  }
}
declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: AdminBlockJSXProps & {
        children?: preact.ComponentChildren;
      };
    }
  }
}

export {AdminBlock};
export type {AdminBlockJSXProps};

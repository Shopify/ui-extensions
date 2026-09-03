/** VERSION: 2.23.0 **/
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
 * Configure the following properties on the admin block component.
 * @publicDocs
 */
export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {
  /**
   * The text displayed as the block's title in the header. If not provided, the extension name will be used.
   */
  heading: AdminBlockProps$1['heading'];
  /**
   * The summary text displayed when the app block is collapsed. Summaries longer than 30 characters will be truncated.
   */
  collapsedSummary: AdminBlockProps$1['collapsedSummary'];
}

declare const tagName = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
  /** @private */
  connectedCallback(): void;
  /** @private */
  adoptedCallback(): void;
}

/**
 * Configure the following properties on the admin block component.
 * @publicDocs
 */
declare class AdminBlock
  extends PolarisCustomElement
  implements AdminBlockProps
{
  heading: string;
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

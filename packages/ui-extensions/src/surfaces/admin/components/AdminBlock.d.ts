/** VERSION: 1.38.0 **/
/* eslint-disable import/extensions */

/* eslint-disable @typescript-eslint/no-namespace */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  AdminBlockProps$1,
  PreactCustomElement,
  RenderImpl,
} from './shared.d.ts';

export interface AdminBlockProps
  extends Pick<AdminBlockProps$1, 'heading' | 'collapsedSummary'> {}

declare const tagName = 's-admin-block';
export interface AdminBlockJSXProps
  extends Partial<AdminBlockProps>,
    Pick<AdminBlockProps$1, 'id'> {}

declare class PolarisCustomElement extends PreactCustomElement {
  constructor(renderImpl: Omit<RenderImpl, 'globalShadowCSS'>);
}

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

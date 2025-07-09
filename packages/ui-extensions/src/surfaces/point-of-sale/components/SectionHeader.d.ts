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
 * A header component for sections.
 */
export interface SectionHeaderProps {
  /**
   * The title text displayed in the section header.
   */
  title: string;
}

declare class SectionHeader
  extends PreactCustomElement
  implements SectionHeaderProps
{
  accessor title: SectionHeaderProps['title'];
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: SectionHeader;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SectionHeaderJSXProps &
        PreactBaseElementPropsWithChildren<SectionHeader>;
    }
  }
}

declare const tagName = 's-section-header';

export interface SectionHeaderJSXProps
  extends Partial<Omit<SectionHeaderProps, 'title'>> {
  // title is required
  title: string;
  id?: string;
}

export {SectionHeader};
export type {SectionHeaderJSXProps};

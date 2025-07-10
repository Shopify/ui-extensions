/** VERSION: 0.0.0 **/

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/member-ordering */

// eslint-disable-next-line @typescript-eslint/triple-slash-reference, spaced-comment
/// <reference lib="DOM" />
import type {
  PreactBaseElementPropsWithChildren,
  PreactCustomElement,
  GlobalProps,
} from './shared';

/**
 * A header component for sections.
 */
export interface SectionHeaderProps extends GlobalProps {
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
  accessor id?: string;
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
}

export {SectionHeader};
export type {SectionHeaderJSXProps};

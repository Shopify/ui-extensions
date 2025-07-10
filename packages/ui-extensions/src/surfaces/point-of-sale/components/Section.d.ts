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

export interface SectionHeaderAction {
  /**
   * The text displayed on the action button.
   */
  title: string;
  /**
   * The callback executed when the action is pressed.
   */
  onPress: () => void;
}

/**
 * A component used to group other components together in a card-like UI.
 */
export interface SectionProps extends GlobalProps {
  /**
   * The title of the section.
   */
  title?: string;
  /**
   * The action configuration for the section header.
   */
  action?: SectionHeaderAction;
}

declare const Section_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Section extends Section_base implements SectionProps {
  accessor title: SectionProps['title'];
  accessor action: SectionProps['action'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Section;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: SectionJSXProps & PreactBaseElementPropsWithChildren<Section>;
    }
  }
}

declare const tagName = 's-section';

export interface SectionJSXProps extends Partial<SectionProps> {}

export {Section};
export type {SectionJSXProps};

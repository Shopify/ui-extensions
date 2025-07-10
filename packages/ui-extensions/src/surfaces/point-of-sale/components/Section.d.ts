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
export interface SectionProps {
  /**
   * The title of the section.
   */
  title?: string;
  /**
   * The action configuration for the section header.
   */
  action?: SectionHeaderAction;
}

declare class Section extends PreactCustomElement implements SectionProps {
  accessor title: SectionProps['title'];
  accessor action: SectionProps['action'];
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

export interface SectionJSXProps extends Partial<SectionProps> {
  id?: string;
}

export {Section};
export type {SectionJSXProps};

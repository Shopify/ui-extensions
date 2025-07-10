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

export type TextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body'
  | 'caption1'
  | 'caption2';

export type ColorType =
  | 'TextPrimary'
  | 'TextSecondary'
  | 'TextCritical'
  | 'TextSuccess';

/**
 * Text can be rendered in different sizes and colors in order to structure content.
 */
export interface TextProps extends GlobalProps {
  /**
   * The visual style variant of the text.
   */
  variant?: TextVariant;
  /**
   * The color of the text.
   */
  color?: ColorType;
}

declare const Text_base: (abstract new (args_0: any) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class Text extends Text_base implements TextProps {
  accessor variant: TextProps['variant'];
  accessor color: TextProps['color'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: Text;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: TextJSXProps & PreactBaseElementPropsWithChildren<Text>;
    }
  }
}

declare const tagName = 's-text';

export interface TextJSXProps extends Partial<TextProps> {}

export {Text};
export type {TextJSXProps};

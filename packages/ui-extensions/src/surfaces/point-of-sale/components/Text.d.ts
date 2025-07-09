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
export interface TextProps {
  /**
   * The visual style variant of the text.
   */
  variant?: TextVariant;
  /**
   * The color of the text.
   */
  color?: ColorType;
}

declare class Text extends PreactCustomElement implements TextProps {
  accessor variant: TextProps['variant'];
  accessor color: TextProps['color'];
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

export interface TextJSXProps extends Partial<TextProps> {
  id?: string;
}

export {Text};
export type {TextJSXProps};

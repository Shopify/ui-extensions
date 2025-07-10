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

export interface POSBlockAction {
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
 * The POSBlock provides a surface on the specified extension target as an entry point to an extension.
 */
export interface POSBlockProps extends GlobalProps {
  /**
   * The action configuration for the block.
   */
  action?: POSBlockAction;
}

declare const POSBlock_base: (abstract new (
  args_0: any,
) => PreactCustomElement) &
  Pick<typeof PreactCustomElement, 'prototype' | 'observedAttributes'>;

declare class POSBlock extends POSBlock_base implements POSBlockProps {
  accessor action: POSBlockProps['action'];
  accessor id?: string;
  constructor();
}

declare global {
  interface HTMLElementTagNameMap {
    [tagName]: POSBlock;
  }
}

declare module 'preact' {
  namespace createElement.JSX {
    interface IntrinsicElements {
      [tagName]: POSBlockJSXProps &
        PreactBaseElementPropsWithChildren<POSBlock>;
    }
  }
}

declare const tagName = 's-pos-block';

export interface POSBlockJSXProps extends Partial<POSBlockProps> {}

export {POSBlock};
export type {POSBlockJSXProps};

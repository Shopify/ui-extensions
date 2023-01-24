import {createRemoteComponent} from '@remote-ui/core';

import type {Spacing} from '../shared';

export interface InlineStackProps {
  /**
   * Specifies the block alignment. This affects the vertical flow of elements.
   * @defaultValue `leading`
   */
  blockAlignment?: 'leading' | 'center' | 'trailing' | 'baseline';

  /**
   * Specifies the inline alignment. This affects the horizontal flow of elements.
   * @defaultValue `leading`
   */
  inlineAlignment?: 'leading' | 'center' | 'trailing';

  /**
   * Adjust spacing between children.
   * @defaultValue 'base'
   **/
  spacing?: Spacing;
}

/**
 * Use to lay out a horizontal row of components.
 *
 * A stack is made of flexible items that wrap each of the stack’s children. Options provide control of the alignment and spacing of the items in the stack.
 * Use `StackItem` to group multiple elements inside a `InlineStack` together.
 */
export const InlineStack = createRemoteComponent<
  'InlineStack',
  InlineStackProps
>('InlineStack');

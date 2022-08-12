import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeConditionalStyle} from '../../style';
import type {Spacing} from '../shared';

export interface BlockSpacerProps {
  /**
   * Adjust size of the spacer
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeConditionalStyle<
    Extract<Spacing, 'extraTight' | 'tight' | 'base' | 'loose' | 'extraLoose'>
  >;
}

/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 *
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
export const BlockSpacer = createRemoteComponent<
  'BlockSpacer',
  BlockSpacerProps,
  false
>('BlockSpacer');

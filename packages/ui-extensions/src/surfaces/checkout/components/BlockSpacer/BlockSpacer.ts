import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps, Spacing} from '../shared';

/** @publicDocs */
export interface BlockSpacerProps extends IdProps {
  /**
   * The size of the spacer.
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Spacing>;
}

/**
 * BlockSpacer creates empty block-axis space, typically when variable spacing
 * is needed between elements. Use BlockStack instead when spacing between all
 * elements is the same.
 */
export const BlockSpacer = createRemoteComponent<
  'BlockSpacer',
  BlockSpacerProps,
  false
>('BlockSpacer');

import {createRemoteComponent} from '@remote-ui/core';

type Size = 'extraSmall' | 'small' | 'base' | 'large' | 'extraLarge';

export interface BlockSpacerProps {
  /**
   * Adjust size of the spacer
   *
   * @defaultValue 'base'
   **/
  size?: Size;
}

/**
 * BlockSpacer is used to create empty block space, typically when variable spacing
 * is needed between multiple elements.
 *
 * Note that you should favor BlockStack when spacing between all elements is the same.
 */
export const BlockSpacer = createRemoteComponent<
  'BlockSpacer',
  BlockSpacerProps
>('BlockSpacer');

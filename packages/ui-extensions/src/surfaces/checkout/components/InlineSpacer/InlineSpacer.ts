import {createRemoteComponent} from '@remote-ui/core';

import type {MaybeResponsiveConditionalStyle} from '../../style/types';
import type {IdProps, Spacing} from '../shared';

/** @publicDocs */
export interface InlineSpacerProps extends IdProps {
  /**
   * The size of the spacer.
   *
   * @defaultValue 'base'
   **/
  spacing?: MaybeResponsiveConditionalStyle<Exclude<Spacing, 'none'>>;
}

/**
 * InlineSpacer creates empty inline-axis space, typically when variable spacing
 * is needed between elements. Use InlineStack instead when spacing between all
 * elements is the same.
 */
export const InlineSpacer = createRemoteComponent<
  'InlineSpacer',
  InlineSpacerProps
>('InlineSpacer');

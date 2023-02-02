import {createRemoteComponent} from '@remote-ui/core';
import {SpacingProps, BackgroundProps} from '../shared';

export interface PageBlockProps extends BackgroundProps, SpacingProps {}

export const PageBlock = createRemoteComponent<'PageBlock', PageBlockProps>(
  'PageBlock',
);

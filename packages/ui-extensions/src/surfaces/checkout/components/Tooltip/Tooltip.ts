import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

/** @publicDocs */
export interface TooltipProps extends IdProps {}

export const Tooltip = createRemoteComponent<'Tooltip', TooltipProps>(
  'Tooltip',
);

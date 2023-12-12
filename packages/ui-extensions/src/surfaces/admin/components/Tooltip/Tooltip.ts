import {createRemoteComponent} from '@remote-ui/core';
import type {GlobalProps} from '../shared';

export interface TooltipProps extends GlobalProps {
  children?: any;
}

/**
 * Tooltips are floating labels that briefly explain the function of a user interface element. They must be specified inside the `interestTarget` prop of an activator component. Currently, activator components are `Button` and `Text`.
 */
export const Tooltip = createRemoteComponent<'Tooltip', TooltipProps>(
  'Tooltip',
);

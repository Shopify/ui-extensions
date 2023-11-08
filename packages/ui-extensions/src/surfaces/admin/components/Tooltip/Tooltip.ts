import {createRemoteComponent} from '@remote-ui/core';
import {BaseOverlayProps} from '../shared';

export type TooltipProps = BaseOverlayProps;

/**
 * Tooltips display contextual information and actions when merchants hover over or focus on a component.
 */
export const Tooltip = createRemoteComponent<'Tooltip', TooltipProps>(
  'Tooltip',
);

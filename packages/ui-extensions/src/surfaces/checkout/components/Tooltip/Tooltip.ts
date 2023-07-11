import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

export interface TooltipProps extends IdProps {}

/**
 * Tooltips are floating labels that briefly explain the function of a user interface element.
 * They must be specified inside the `overlay` prop of an activator component.
 * Currently, activator components are `Button`, `Link`, and `Pressable`.
 *
 * The library takes care of applying the WAI-ARIA Tooltip Widget pattern automatically for the activator
 * and the tooltip content. Expect screen readers to read the tooltip content when the user focuses the activator.
 */
export const Tooltip = createRemoteComponent<'Tooltip', TooltipProps>(
  'Tooltip',
);

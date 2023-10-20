import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';
import {LinkProps} from '../shared-checkout-components';

export interface ResourceItemProps
  extends Pick<LinkProps, 'accessibilityLabel' | 'to' | 'onPress'> {
  /**
   * The action grouping for the item, provided as buttons.
   */
  action?: RemoteFragment;

  /**
   * Label for the action grouping
   */
  actionLabel?: string;

  /**
   * Accessibility label for the action grouping
   */
  actionAccessibilityLabel?: string;

  /**
   * Indicates that the item is in a loading state.
   *
   * When `true`, the item will be replaced by loading indicators (for example: skeletons or spinners).
   *
   * @defaultValue false
   */
  loading?: boolean;
}

export const ResourceItem = createRemoteComponent<
  'ResourceItem',
  ResourceItemProps
>('ResourceItem');

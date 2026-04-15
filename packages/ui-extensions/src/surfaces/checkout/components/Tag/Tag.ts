import {createRemoteComponent} from '@remote-ui/core';

import type {IconSource} from '../Icon/Icon';
import type {IdProps} from '../shared';

/** @publicDocs */
export interface TagProps extends IdProps {
  children?: string;
  /**
   * The source of the icon displayed inside the tag. Pass a valid icon source to render a visual indicator alongside the tag label.
   */
  icon?: IconSource;
  /**
   * A label used for users using assistive technologies. When set, any
   * `children` supplied to this component will not be announced to screen reader users.
   */
  accessibilityLabel?: string;
  /**
   * A callback fired when the tag is removed by the user.
   */
  onRemove?(): void;
}

/**
 * A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.
 */
export const Tag = createRemoteComponent<'Tag', TagProps>('Tag');

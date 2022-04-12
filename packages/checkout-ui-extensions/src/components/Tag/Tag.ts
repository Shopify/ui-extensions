import {createRemoteComponent} from '@remote-ui/core';

import {IconSource} from '../Icon';

export interface TagProps {
  children?: string;
  /**
   * Icon source
   */
  icon?: IconSource;
  /**
   * A label used for buyers using assistive technologies. When provided, any
   * `children` supplied to this component are hidden from being seen for
   * accessibility purposes to prevent duplicate content from being read.
   */
  accessibilityLabel?: string;
  /**
   * An accessible label for the remove button in a Tag
   */
  removeControlAccessibilityLabel?: string;
  /**
   * Callback when tag is removed
   */
  onRemove?(): void;
}

/**
 * A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.
 */
export const Tag = createRemoteComponent<'Tag', TagProps>('Tag');

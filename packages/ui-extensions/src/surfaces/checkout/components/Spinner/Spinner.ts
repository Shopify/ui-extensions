import {createRemoteComponent} from '@remote-ui/core';

import type {Appearance, IdProps, Size} from '../shared';

/** @publicDocs */
export interface SpinnerProps extends IdProps {
  /**
   * The size of the spinner icon.
   *
   * - `extraSmall`: The smallest size for tight spaces or inline indicators.
   * - `small`: A compact size for secondary loading states.
   * - `base`: The default size, suitable for most use cases.
   * - `large`: A larger size for more prominent loading states.
   * - `fill`: Expands to fill the available space.
   *
   * @defaultValue 'base'
   */
  size?: Extract<Size, 'extraSmall' | 'small' | 'base' | 'large' | 'fill'>;

  /**
   * The visual appearance of the spinner icon.
   *
   * - `accent`: Uses the accent color to convey emphasis and draw attention.
   * - `monochrome`: Inherits the color of its parent element.
   *
   * @defaultValue 'accent'
   */
  appearance?: Extract<Appearance, 'accent' | 'monochrome'>;

  /**
   * A label that describes the purpose or contents of the element. When set, it will be announced
   * to users using assistive technologies and will provide them with more context. When set, any
   * children or `label` supplied won't be announced to screen readers.
   */
  accessibilityLabel?: string;
}

/**
 * Spinner is used to notify buyers that their action is being processed.
 * The Spinner is usually used when sending or receiving data from a server.
 */
export const Spinner = createRemoteComponent<'Spinner', SpinnerProps>(
  'Spinner',
);

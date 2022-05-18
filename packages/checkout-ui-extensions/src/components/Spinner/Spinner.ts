import {createRemoteComponent} from '@remote-ui/core';

export interface SpinnerProps {
  /**
   * Adjust the size.
   *
   * If not specified, it will use the default size which is
   * about twice as big as the base text.
   *
   * @defaultValue 'base'
   */
  size?: 'extraSmall' | 'small' | 'base' | 'large';
  /**
   * Specify that the Spinner will inherit its color from its parent.
   *
   * If not specified, it will take the `interactive` color from the theme.
   */
  color?: 'inherit';
  /**
   * A label to use for the Spinner that will be used for buyers using
   * assistive technologies like screen readers. If will also be used to replace
   * the animated loading indicator when buyers prefers reduced motion. If not included,
   * it will use the loading indicator for all buyers.
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

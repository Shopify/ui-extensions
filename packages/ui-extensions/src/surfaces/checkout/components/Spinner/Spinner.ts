import {createRemoteComponent} from '@remote-ui/core';
import type {SpinnerProps as BaseSpinnerProps} from '@shopify/ui-api-design/dist/components/Spinner';

export interface SpinnerProps
  extends Pick<BaseSpinnerProps, 'accessibilityLabel' | 'id'> {
  size?: Extract<
    BaseSpinnerProps['size'],
    'small-100' | 'small' | 'base' | 'large' | 'large-100'
  >;
}

/**
 * Spinner is used to notify buyers that their action is being processed.
 * The Spinner is usually used when sending or receiving data from a server.
 */
export const Spinner = createRemoteComponent<'Spinner', SpinnerProps>(
  'Spinner',
);

import {createRemoteComponent} from '@remote-ui/core';

import {
  ViewProps as CheckoutViewProps,
  BackgroundProps,
} from '@shopify/checkout-ui-extensions';

export interface ViewProps
  extends CheckoutViewProps,
    Pick<BackgroundProps, 'background'> {}

export const View = createRemoteComponent<'View', ViewProps>('View');

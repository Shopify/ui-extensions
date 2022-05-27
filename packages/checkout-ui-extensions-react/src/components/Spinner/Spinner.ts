import {Spinner as BaseSpinner} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SpinnerProps = ReactPropsFromRemoteComponentType<
  typeof BaseSpinner
>;

export const Spinner = createRemoteReactComponent(BaseSpinner);

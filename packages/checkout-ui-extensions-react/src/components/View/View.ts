import {View as BaseView} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ViewProps = ReactPropsFromRemoteComponentType<typeof BaseView>;

export const View = createRemoteReactComponent(BaseView);

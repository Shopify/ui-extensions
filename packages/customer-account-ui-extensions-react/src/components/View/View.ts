import {View as BaseView} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ViewProps = ReactPropsFromRemoteComponentType<typeof BaseView>;

export const View = createRemoteReactComponent(BaseView);

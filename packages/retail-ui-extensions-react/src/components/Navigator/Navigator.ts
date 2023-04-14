import {Navigator as BaseNavigator} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type NavigatorProps = ReactPropsFromRemoteComponentType<
  typeof BaseNavigator
>;

export const Navigator = createRemoteReactComponent(BaseNavigator);

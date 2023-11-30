import {Navigator as BaseNavigator} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type NavigatorProps = ReactPropsFromRemoteComponentType<
  typeof BaseNavigator
>;

export const Navigator = createRemoteReactComponent(BaseNavigator);

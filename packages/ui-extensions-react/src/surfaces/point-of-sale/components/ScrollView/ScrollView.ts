import {ScrollView as BaseScrollView} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ScrollViewProps = ReactPropsFromRemoteComponentType<
  typeof BaseScrollView
>;

export const ScrollView = createRemoteReactComponent(BaseScrollView);

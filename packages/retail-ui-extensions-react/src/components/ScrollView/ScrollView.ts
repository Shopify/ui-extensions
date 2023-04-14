import {ScrollView as BaseScrollView} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ScrollViewProps = ReactPropsFromRemoteComponentType<
  typeof BaseScrollView
>;

export const ScrollView = createRemoteReactComponent(BaseScrollView);

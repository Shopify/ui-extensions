import {Screen as BaseScreen} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ScreenProps = ReactPropsFromRemoteComponentType<typeof BaseScreen>;

export const Screen = createRemoteReactComponent(BaseScreen);

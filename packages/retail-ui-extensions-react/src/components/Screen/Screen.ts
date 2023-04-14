import {Screen as BaseScreen} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ScreenProps = ReactPropsFromRemoteComponentType<typeof BaseScreen>;

export const Screen = createRemoteReactComponent(BaseScreen);

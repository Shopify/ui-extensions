import {Text as BaseText} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;

export const Text = createRemoteReactComponent(BaseText);
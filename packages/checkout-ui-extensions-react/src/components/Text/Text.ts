import {Text as BaseText} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;

export const Text = createRemoteReactComponent(BaseText);

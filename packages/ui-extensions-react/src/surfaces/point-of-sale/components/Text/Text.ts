import {Text as BaseText} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;

export const Text = createRemoteReactComponent(BaseText);

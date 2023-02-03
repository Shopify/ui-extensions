import {Text as BaseText} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Text = createRemoteReactComponent(BaseText);
export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;

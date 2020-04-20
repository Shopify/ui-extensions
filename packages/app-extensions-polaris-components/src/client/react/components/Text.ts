import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Text as BaseText} from '../../core';

export type TextProps = ReactPropsFromRemoteComponentType<typeof BaseText>;
export const Text = createRemoteReactComponent(BaseText);

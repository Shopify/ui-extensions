import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {StackItem as BaseStackItem} from '../../core';

export type StackItemProps = ReactPropsFromRemoteComponentType<typeof BaseStackItem>;
export const StackItem = createRemoteReactComponent(BaseStackItem);

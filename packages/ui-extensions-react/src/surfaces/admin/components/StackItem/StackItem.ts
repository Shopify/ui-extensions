import {StackItem as BaseStackItem} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const StackItem = createRemoteReactComponent(BaseStackItem);
export type StackItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseStackItem
>;

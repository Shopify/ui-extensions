import {Pressable as BasePressable} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Pressable = createRemoteReactComponent(BasePressable);
export type PressableProps = ReactPropsFromRemoteComponentType<
  typeof BasePressable
>;

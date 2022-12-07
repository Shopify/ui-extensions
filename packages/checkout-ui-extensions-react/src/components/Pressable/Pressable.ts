import {Pressable as BasePressable} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PressableProps = ReactPropsFromRemoteComponentType<
  typeof BasePressable
>;

export const Pressable = createRemoteReactComponent(BasePressable, {
  fragmentProps: ['overlay'],
});

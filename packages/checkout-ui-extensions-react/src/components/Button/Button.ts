import {Button as BaseButton} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;

export const Button = createRemoteReactComponent(BaseButton, {
  fragmentProps: ['overlay'],
});

import {TextField as BaseTextField} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type TextFieldProps = ReactPropsFromRemoteComponentType<
  typeof BaseTextField
>;

export const TextField = createRemoteReactComponent(BaseTextField, {
  fragmentProps: ['accessory'],
});

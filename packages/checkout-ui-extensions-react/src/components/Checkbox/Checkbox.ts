import {Checkbox as BaseCheckbox} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CheckboxProps = ReactPropsFromRemoteComponentType<
  typeof BaseCheckbox
>;

export const Checkbox = createRemoteReactComponent(BaseCheckbox);

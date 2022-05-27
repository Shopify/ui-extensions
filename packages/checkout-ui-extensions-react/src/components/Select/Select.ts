import {Select as BaseSelect} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;

export const Select = createRemoteReactComponent(BaseSelect);

import {
  Select as BaseSelect,
  SelectOptionProps as BaseSelectOptionProps,
} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export type SelectOptionProps = BaseSelectOptionProps;

export const Select = createRemoteReactComponent(BaseSelect);

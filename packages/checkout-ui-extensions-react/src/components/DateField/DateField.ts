import {DateField as BaseDateField} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type DateFieldProps = ReactPropsFromRemoteComponentType<
  typeof BaseDateField
>;

export const DateField = createRemoteReactComponent(BaseDateField);

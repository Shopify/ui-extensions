import {DatePicker as BaseDatePicker} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type DatePickerProps = ReactPropsFromRemoteComponentType<
  typeof BaseDatePicker
>;

export const DatePicker = createRemoteReactComponent(BaseDatePicker);

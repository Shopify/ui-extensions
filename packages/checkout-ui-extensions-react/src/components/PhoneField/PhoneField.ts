import {PhoneField as BasePhoneField} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type PhoneFieldProps = ReactPropsFromRemoteComponentType<
  typeof BasePhoneField
>;

export const PhoneField = createRemoteReactComponent(BasePhoneField, {
  fragmentProps: ['accessory'],
});

import {Form as BaseForm} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type FormProps = ReactPropsFromRemoteComponentType<typeof BaseForm>;

export const Form = createRemoteReactComponent(BaseForm);

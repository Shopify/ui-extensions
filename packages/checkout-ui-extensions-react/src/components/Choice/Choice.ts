import {Choice as BaseChoice} from '@shopify/checkout-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ChoiceProps = ReactPropsFromRemoteComponentType<typeof BaseChoice>;

export const Choice = createRemoteReactComponent(BaseChoice);

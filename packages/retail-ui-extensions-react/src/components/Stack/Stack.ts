import {Stack as BaseStack} from '@shopify/retail-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;

export const Stack = createRemoteReactComponent(BaseStack);

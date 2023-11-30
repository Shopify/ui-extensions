import {Stack as BaseStack} from '@shopify/ui-extensions/point-of-sale';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;

export const Stack = createRemoteReactComponent(BaseStack);

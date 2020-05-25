import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Stack as BaseStack} from '@shopify/argo/components';

export type StackProps = ReactPropsFromRemoteComponentType<typeof BaseStack>;
export const Stack = createRemoteReactComponent(BaseStack);

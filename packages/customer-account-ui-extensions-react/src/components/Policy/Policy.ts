import {Policy as BasePolicy} from '@shopify/customer-account-ui-extensions';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PolicyProps = ReactPropsFromRemoteComponentType<typeof BasePolicy>;

export const Policy = createRemoteReactComponent(BasePolicy);

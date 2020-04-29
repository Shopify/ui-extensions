import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Link as BaseLink} from '@shopify/argo/components';

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;
export const Link = createRemoteReactComponent(BaseLink);

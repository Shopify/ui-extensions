import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Link as BaseLink} from '../../core';

export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;
export const Link = createRemoteReactComponent(BaseLink);

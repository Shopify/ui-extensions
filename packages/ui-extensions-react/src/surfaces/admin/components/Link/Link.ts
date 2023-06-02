import {Link as BaseLink} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Link = createRemoteReactComponent(BaseLink);
export type LinkProps = ReactPropsFromRemoteComponentType<typeof BaseLink>;

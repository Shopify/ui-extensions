import {Friends as BaseFriends} from '@shopify/customer-account-ui-extensions';

import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

// eslint-disable-next-line prettier/prettier
export type FriendsProps = ReactPropsFromRemoteComponentType<typeof BaseFriends>;
export const Friends = createRemoteReactComponent(BaseFriends);

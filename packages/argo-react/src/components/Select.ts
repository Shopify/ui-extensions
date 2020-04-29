import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Select as BaseSelect} from '@shopify/argo/components';

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export const Select = createRemoteReactComponent(BaseSelect);

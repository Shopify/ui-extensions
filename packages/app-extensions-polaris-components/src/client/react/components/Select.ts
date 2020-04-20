import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Select as BaseSelect} from '../../core';

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export const Select = createRemoteReactComponent(BaseSelect);

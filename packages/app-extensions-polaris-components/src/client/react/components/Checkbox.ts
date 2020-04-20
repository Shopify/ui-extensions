import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@shopify/remote-ui-react';

import {Checkbox as BaseCheckbox} from '../../core';

export type CheckboxProps = ReactPropsFromRemoteComponentType<typeof BaseCheckbox>;
export const Checkbox = createRemoteReactComponent(BaseCheckbox);

import {createRemoteReactComponent, ReactPropsFromRemoteComponentType} from '@remote-ui/react';

import {Checkbox as BaseCheckbox} from '@shopify/argo/components';

export type CheckboxProps = ReactPropsFromRemoteComponentType<typeof BaseCheckbox>;
export const Checkbox = createRemoteReactComponent(BaseCheckbox);

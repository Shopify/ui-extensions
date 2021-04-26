import {Select as BaseSelect, SelectProps} from '@shopify/argo-admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Select = createRemoteReactComponent(BaseSelect);

export {SelectProps};

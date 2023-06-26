import {List as BaseList} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ListProps = ReactPropsFromRemoteComponentType<typeof BaseList>;

export const List = createRemoteReactComponent(BaseList);

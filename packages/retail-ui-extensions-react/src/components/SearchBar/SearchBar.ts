import {SearchBar as BaseSearchBar} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {SearchBarProps} from '@shopify/retail-ui-extensions';

export const SearchBar = createRemoteReactComponent(BaseSearchBar);

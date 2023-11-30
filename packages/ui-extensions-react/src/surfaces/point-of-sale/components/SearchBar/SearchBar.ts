import {SearchBar as BaseSearchBar} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {SearchBarProps} from '@shopify/ui-extensions/point-of-sale';

export const SearchBar = createRemoteReactComponent(BaseSearchBar);

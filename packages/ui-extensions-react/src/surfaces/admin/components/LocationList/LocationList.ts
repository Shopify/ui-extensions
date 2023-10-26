import {LocationList as BaseLocationList} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const LocationList = createRemoteReactComponent(BaseLocationList);
export type {LocationListProps} from '@shopify/ui-extensions/admin';

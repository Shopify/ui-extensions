import {ChoiceList as BaseChoiceList} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ChoiceListProps} from '@shopify/ui-extensions/checkout';

export const ChoiceList = createRemoteReactComponent(BaseChoiceList);

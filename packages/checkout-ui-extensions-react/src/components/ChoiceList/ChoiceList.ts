import {ChoiceList as BaseChoiceList} from '@shopify/checkout-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {ChoiceListProps} from '@shopify/checkout-ui-extensions';

export const ChoiceList = createRemoteReactComponent(BaseChoiceList);

import {RadioButtonList as BaseRadioButtonList} from '@shopify/retail-ui-extensions';
import {createRemoteReactComponent} from '@remote-ui/react';

export type {RadioButtonListProps} from '@shopify/retail-ui-extensions';

export const RadioButtonList = createRemoteReactComponent(BaseRadioButtonList);
